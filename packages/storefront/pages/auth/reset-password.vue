<template>
    <MlResetPasswordSuccess v-if="isSuccess" />
    <MlResetPasswordPending @success="isSuccess = true" v-else-if="isValid" />
    <MlResetPasswordInvalid v-else />
</template>

<script lang="ts">
import { computed, defineComponent, ref, useAsync } from '@nuxtjs/composition-api';
import {
    MlResetPasswordPending,
    MlResetPasswordSuccess,
    MlResetPasswordInvalid
} from '~/components/auth';
import { ResetPasswordState, useAuthStore } from '~/store';
import { useRouter } from '~/composables';

export default defineComponent({
    name: 'ResetPassword',
    layout: 'none',

    components: {
        MlResetPasswordPending,
        MlResetPasswordSuccess,
        MlResetPasswordInvalid
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const passwordReset = useAsync<ResetPasswordState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordState(code);
            return authStore.resetPasswordState!;
        });

        const isSuccess = ref(false);
        const isValid = computed(() => passwordReset.value!.isValid);

        return { isSuccess, isValid };
    }
});
</script>
