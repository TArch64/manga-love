<template>
    <ResetPasswordValid v-if="passwordReset.isValid" />
    <ResetPasswordInvalid v-else />
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import { ResetPasswordValid, ResetPasswordInvalid } from '~/components/reset-password';
import { ResetPasswordState, useAuthStore } from '~/store';
import { useRouter } from '~/composables';

export default defineComponent({
    name: 'ResetPassword',
    layout: 'auth',

    components: {
        ResetPasswordValid,
        ResetPasswordInvalid
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const passwordReset = useAsync<ResetPasswordState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordState(code);
            return authStore.resetPasswordState!;
        });

        return { passwordReset };
    }
});
</script>

<style>
.ml-reset-password__heading {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 50px;
}

.ml-reset-password__note {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #808080;
    margin-top: 0;
    margin-bottom: 25px;
}
</style>
