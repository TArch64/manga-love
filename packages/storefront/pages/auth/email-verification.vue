<template>
    <EmailVerificationValid v-if="emailVerification.isValid" />
    <EmailVerificationInvalid v-else />
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import { EmailVerificationValid, EmailVerificationInvalid } from '~/components/email-verification';
import { EmailVerificationState, useAuthStore } from '~/store';
import { useRouter } from '~/composables';

export default defineComponent({
    name: 'EmailVerification',
    layout: 'none',

    components: {
        EmailVerificationValid,
        EmailVerificationInvalid
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const emailVerification = useAsync<EmailVerificationState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadEmailVerificationState(code);
            return authStore.emailVerificationState!;
        });

        return { emailVerification };
    }
});
</script>
