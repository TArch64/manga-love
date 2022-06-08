<template>
    <div class="ml-google-auth">
        <client-only>
            <div
                id="g_id_onload"
                data-context="signin"
                data-ux_mode="popup"
                :data-client_id="clientId"
                :data-callback="callbackName"
            />

            <div
                class="g_id_signin"
                data-type="icon"
                data-shape="circle"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
            />
        </client-only>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import { v4 as generateId } from 'uuid';
import { GoogleCredentials } from '~/store';

export default defineComponent({
    name: 'MlGoogleAuth',

    emits: ['sign-in'],

    setup(_, { emit }) {
        const context = useContext();
        const callbackName = ref(`on_gapi_auth_${generateId()}`.replaceAll('-', '_'));
        const clientId = ref(context.env.STOREFRONT_GOOGLE_ID);

        function onSignIn(response: GoogleCredentials): void {
            const event: GoogleCredentials = { credential: response.credential };
            emit('sign-in', event);
        }

        if (process.client) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window[callbackName.value] = onSignIn;
        }

        return {
            callbackName,
            clientId
        };
    }
});
</script>

<style scoped>
.ml-google-auth {
    min-height: 44px;
}
</style>
