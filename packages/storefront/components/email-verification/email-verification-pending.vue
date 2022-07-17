<template>
    <MlAuthAction
        :title="$t('auth.emailVerification.pending.title', { name: username })"
        :description="$t('auth.emailVerification.pending.description')"
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
import { useToaster } from '~/composables';

export default defineComponent({
    name: 'EmailVerificationPending',

    components: {
        MlAuthAction,
        MlButton
    },

    emits: ['success'],

    setup(_, { emit }) {
        const authStore = useAuthStore();
        const toaster = useToaster();
        const username = computed(() => authStore.emailVerificationState!.username);
        const isProcessing = ref(false);

        async function verifyEmail(): Promise<void> {
            try {
                isProcessing.value = true;
                await authStore.verifyEmail();
                emit('success');
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
