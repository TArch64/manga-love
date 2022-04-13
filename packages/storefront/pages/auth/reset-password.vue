<template>
    <div v-if="passwordReset.isValid">
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <MlForm :form="form" @submit="resetPassword">
            <MlPasswordField
                name="password"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.password.label')"
            />

            <MlPasswordField
                name="passwordConfirmation"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.passwordConfirmation.label')"
            />

            <MlButton class="ml-width--full" skin="primary" type="submit" size="lg">
                {{ $t('auth.resetPassword.submit') }}
            </MlButton>
        </MlForm>
    </div>

    <div v-else>
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <p class="ml-margin-bottom--lg">
            {{ $t('auth.resetPassword.errors.invalidCode') }}
        </p>

        <MlButton class="ml-width--full ml-margin-bottom--md" link="/auth/forgot" skin="primary" size="lg">
            {{ $t('auth.resetPassword.toForgot') }}
        </MlButton>
    </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlPasswordField,
    validateRequired,
    validatePasswordConfirmation
} from '~/components/common/form';
import { ResetPasswordInfo, useAuthStore } from '~/store';
import { MlButton } from '~/components/common';
import { useRouter, useToaster } from '~/composables';

interface ResetPasswordForm extends ResetPasswordInfo {
    passwordConfirmation: string;
}

export default defineComponent({
    name: 'ResetPassword',
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

        const passwordReset = useAsync<{ isValid: boolean }>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordValidity(code);
            return { isValid: authStore.isResetCodeValid };
        });

        const form = useForm<ResetPasswordForm>({
            password: {
                value: '',
                affects: ['passwordConfirmation'],
                validators: [
                    validateRequired<ResetPasswordForm>('validations.required', { field: 'Password' })
                ]
            },
            passwordConfirmation: {
                value: '',
                validators: [
                    validateRequired<ResetPasswordForm>('validations.required', { field: 'Confirmation' }),
                    validatePasswordConfirmation<ResetPasswordForm>()
                ]
            }
        });

        async function resetPassword(): Promise<void> {
            try {
                await authStore.resetPassword(form.data);
                router.push('/');
            } catch (error) {
                toaster.show({ path: 'errors.somethingWentWrong' });
            }
        }

        return {
            form,
            resetPassword,
            passwordReset
        };
    }
});
</script>

<style scoped>
.ml-reset-password__heading {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
