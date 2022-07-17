<template>
    <div class="ml-google-auth">
        <client-only>
            <div ref="containerRef" />
        </client-only>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useContext } from '@nuxtjs/composition-api';
import { GoogleCredentials } from '~/store';
import { useExternalScript } from '~/composables';

export default defineComponent({
    name: 'MlGoogleAuth',

    emits: ['sign-in'],

    setup(_, { emit }) {
        const context = useContext();
        const containerRef = ref<HTMLElement | null>(null);

        function onSignIn(response: GoogleCredentials): void {
            const event: GoogleCredentials = { credential: response.credential };
            emit('sign-in', event);
        }

        if (process.client) {
            onMounted(async () => {
                await useExternalScript('https://accounts.google.com/gsi/client');
                const api = window.google.accounts.id;

                api.initialize({ client_id: context.env.STOREFRONT_GOOGLE_ID, callback: onSignIn });

                api.renderButton(containerRef.value!, {
                    type: 'icon',
                    shape: 'circle',
                    theme: 'outline',
                    text: 'signin_with',
                    size: 'large'
                });

                api.prompt();
            });
        }

        return { containerRef };
    }
});
</script>

<style scoped>
.ml-google-auth {
    height: 44px;
    width: 44px;
}
</style>
