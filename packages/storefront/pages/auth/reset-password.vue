<template>
    <div>
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
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlPasswordField,
    validateRequired,
    validatePasswordConfirmation
} from '~/components/common/form';
import { ResetPasswordInfo } from '~/store';
import { MlButton } from '~/components/common';

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

        function resetPassword(): void {
            console.log(form.data);
        }

        return { form, resetPassword };
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
    margin-bottom: 40px;
}
</style>
