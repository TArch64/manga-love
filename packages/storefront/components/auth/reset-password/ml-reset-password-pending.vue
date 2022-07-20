<template>
    <MlAuthAction
        form
        :title="$t('auth.resetPassword.pending.title', { username })"
        :description="$t('auth.resetPassword.pending.description')"
    >
        <template #actions>
            <MlForm :form="form" :loading="isProcessing" @submit="resetPassword">
                <MlPasswordField
                    name="password"
                    class="ml-margin-bottom--md"
                    :label="$t('auth.form.newPassword.label')"
                />

                <MlPasswordField
                    name="passwordConfirmation"
                    class="ml-margin-bottom--md"
                    :label="$t('auth.form.newPasswordConfirmation.label')"
                />

                <MlButton class="ml-width--full ml-margin-top--auto ml-margin-bottom--md" skin="primary" type="submit" size="lg" :loading="isProcessing">
                    {{ $t('auth.resetPassword.confirm') }}
                </MlButton>

                <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-up" skin="flat" size="lg">
                    {{ $t('auth.resetPassword.toSignUp') }}
                </MlButton>
            </MlForm>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useAsync } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlPasswordField,
    validateRequired,
    validatePasswordConfirmation, validatePassword
} from '~/components/common/form';
import { ResetPasswordInfo, ResetPasswordState, useAuthStore } from '~/store';
import { MlButton } from '~/components/common';
import { useRouter, useToaster } from '~/composables';
import MlAuthAction from '../ml-auth-action.vue';

interface ResetPasswordForm extends ResetPasswordInfo {
    passwordConfirmation: string;
}

export default defineComponent({
    name: 'MlResetPasswordPending',

    components: {
        MlButton,
        MlForm,
        MlPasswordField,
        MlAuthAction
    },

    emits: ['success'],

    setup(_, { emit }) {
        const authStore = useAuthStore();
        const toaster = useToaster();
        const router = useRouter();
        const isProcessing = ref(false);

        const passwordReset = useAsync<ResetPasswordState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordState(code);
            return authStore.resetPasswordState!;
        });

        const username = computed(() => passwordReset.value?.username ?? '');

        const form = useForm<ResetPasswordForm>({
            password: {
                value: '',
                validators: [
                    validateRequired({ field: 'Password' }),
                    validatePassword()
                ]
            },
            passwordConfirmation: {
                value: '',
                dependsOn: ['password'],
                validators: [
                    validateRequired({ field: 'Confirmation' }),
                    validatePasswordConfirmation()
                ]
            }
        });

        async function resetPassword(): Promise<void> {
            try {
                isProcessing.value = true;
                await authStore.resetPassword(form.data);
                emit('success');
            } catch (error) {
                toaster.show({ path: 'errors.somethingWentWrong' });
                isProcessing.value = false;
            }
        }

        return {
            form,
            username,
            resetPassword,
            passwordReset,
            isProcessing
        };
    }
});
</script>
