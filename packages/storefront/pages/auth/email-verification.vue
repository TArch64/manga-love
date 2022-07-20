<template>
    <MlEmailVerificationSuccess v-if="isSuccess" />
    <MlEmailVerificationPending @success="isSuccess = true" v-else-if="isValid" />
    <MlEmailVerificationInvalid v-else />
</template>

<script lang="ts">
import { computed, defineComponent, ref, useAsync } from '@nuxtjs/composition-api';
import {
    MlEmailVerificationPending,
    MlEmailVerificationSuccess,
    MlEmailVerificationInvalid
} from '~/components/auth';
import { EmailVerificationState, useAuthStore } from '~/store';
import { useRouter } from '~/composables';

export default defineComponent({
    name: 'EmailVerification',
    layout: 'none',

    components: {
        MlEmailVerificationPending,
        MlEmailVerificationSuccess,
        MlEmailVerificationInvalid
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const emailVerification = useAsync<EmailVerificationState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadEmailVerificationState(code);
            return authStore.emailVerificationState!;
        });

        const isSuccess = ref(false);
        const isValid = computed(() => emailVerification.value!.isValid);

        return { isSuccess, isValid };
    }
});
</script>
