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
import { decode as decodeJwt } from 'jsonwebtoken';
import { GoogleUser } from '~/store';

type GoogleAuthResponse = {
    credential: string;
};

type GoogleAuthPayload = {
    email: string;
    email_verified: string;
    name: string;
    picture: string;
};

export default defineComponent({
    name: 'MlGoogleAuth',

    emits: ['sign-in'],

    setup(_, { emit }) {
        const context = useContext();
        const callbackName = ref(`on_gapi_sign_in_${generateId()}`.replaceAll('-', '_'));
        const clientId = ref(context.env.STOREFRONT_GOOGLE_ID);

        function onSignIn(response: GoogleAuthResponse): void {
            const payload = decodeJwt(response.credential) as GoogleAuthPayload;

            const user: GoogleUser = {
                email: payload.email,
                isEmailVerified: payload.email_verified,
                name: payload.name,
                avatarUrl: payload.picture
            };

            emit('sign-in', user);
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
