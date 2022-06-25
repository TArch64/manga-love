<template>
    <MlAuthAction
        :title="$t('auth.emailVerification.title', { name: username })"
        :description="$t('auth.emailVerification.description')"
    >
        <template #actions>
            <MlButton
                class="ml-width--full"
                type="button"
                skin="primary"
                size="lg"
                :loading="isProcessing"
                @click="verifyEmail"
            >
                {{ $t('auth.emailVerification.confirm') }}
            </MlButton>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import { MlAuthAction } from '~/components/auth';
import { MlButton } from '~/components/common';
import { useAuthStore } from '~/store';
import { useRouter, useToaster } from '~/composables';

export default defineComponent({
    name: 'EmailVerificationValid',
    layout: 'none',

    components: {
        MlAuthAction,
        MlButton
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        const toaster = useToaster();
        const username = computed(() => authStore.emailVerificationState!.name);
        const isProcessing = ref(false);

        async function verifyEmail(): Promise<void> {
            try {
                isProcessing.value = true;
                await authStore.verifyEmail();
                router.push('/');
            } catch (error) {
                toaster.show({ path: 'errors.somethingWentWrong' });
                isProcessing.value = false;
            }
        }

        return {
            username,
            isProcessing,
            verifyEmail
        };
    }
});
</script>
