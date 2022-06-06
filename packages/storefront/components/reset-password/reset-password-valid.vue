<template>
    <div class="ml-flex ml-flex--column ml-padding-bottom--xlg">
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <p class="ml-reset-password__note">
            {{ $t('auth.resetPassword.note') }}
        </p>

        <MlForm class="ml-flex--grow" :form="form" :loading="isProcessing" @submit="resetPassword">
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
                {{ $t('auth.resetPassword.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-up" skin="flat" size="lg">
                {{ $t('auth.resetPassword.toSignUp') }}
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from '@nuxtjs/composition-api';
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

interface ResetPasswordForm extends ResetPasswordInfo {
    passwordConfirmation: string;
}

export default defineComponent({
    name: 'ResetPasswordValid',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlPasswordField
    },

    setup() {
        const authStore = useAuthStore();
        const toaster = useToaster();
        const router = useRouter();
        const isProcessing = ref(false);

        const passwordReset = useAsync<ResetPasswordState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordState(code);
            return authStore.resetPasswordState!;
        });

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
                router.push('/');
            } catch (error) {
                toaster.show({ path: 'errors.somethingWentWrong' });
                isProcessing.value = false;
            }
        }

        return {
            form,
            resetPassword,
            passwordReset,
            isProcessing
        };
    }
});
</script>
