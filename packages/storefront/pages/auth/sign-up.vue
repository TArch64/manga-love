<template>
    <div>
        <h1 class="ml-sign-up__greeting">
            {{ $t('auth.signUp.greeting') }}
        </h1>

        <MlForm :form="authForm">
            <MlTextField
                name="username"
                class="ml-margin-bottom--md"
                placeholder="Type username"
                label="Username"
            />

            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--md"
                placeholder="Type email"
                label="Email"
            />

            <MlPasswordField
                class="ml-margin-bottom--md"
                label="Password"
                name="password"
            />

            <MlPasswordField
                label="Confirm password"
                name="passwordConfirmation"
            />
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlTextField,
    MlPasswordField,
    validateRequired,
    FormValidator,
    validateEmail
} from '~/components/common/form';
import { SignInCredentials, SignUpInfo } from '~/store';

interface SignUpForm extends SignUpInfo {
    passwordConfirmation: string;
}

export default defineComponent({
    name: 'SignUp',
    layout: 'auth',

    components: {
        MlForm,
        MlTextField,
        MlPasswordField
    },

    setup() {
        const nuxt = useContext();

        function getRequiredMessage(field: string): string {
            return nuxt.app.i18n.t('validations.required', { field }) as string;
        }

        const confirmationValidator: FormValidator<unknown, SignUpForm> = (_, form) => {
            if (form.password === form.passwordConfirmation) return null;

            return { message: 'validations.passwordConfirmation' };
        };

        const authForm = useForm<SignUpForm>({
            username: {
                value: '',
                validators: [validateRequired<SignUpForm>(getRequiredMessage('Username'))]
            },
            email: {
                value: '',
                validators: [
                    validateRequired<SignUpForm>(getRequiredMessage('Email')),
                    validateEmail<SignUpForm>()
                ]
            },
            password: {
                value: '',
                affects: ['passwordConfirmation'],
                validators: [validateRequired<SignUpForm>(getRequiredMessage('Email'))]
            },
            passwordConfirmation: {
                value: '',
                validators: [
                    validateRequired<SignUpForm>(getRequiredMessage('Confirmation')),
                    confirmationValidator
                ]
            }
        });

        return { authForm };
    }
});
</script>

<style scoped>
.ml-sign-up__greeting {
    text-transform: uppercase;
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 1.5px;
    color: #303030;
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
