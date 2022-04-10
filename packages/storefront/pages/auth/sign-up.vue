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
                name="passwordConfirmation"
                label="Confirm password"
                class="ml-margin-bottom--lg"
            />

            <MlButton class="ml-width--full ml-margin-bottom--xlg" type="submit" skin="primary" size="lg">
                {{ $t('auth.signUp.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-in" skin="flat" size="lg">
                <span class="ml-sign-up__to-sign-in-question">{{ $t('auth.signUp.toSignInQuestion') }}</span>
                <span class="ml-sign-up__to-sign-in-link">{{ $t('auth.signUp.toSignIn') }}</span>
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlTextField,
    MlPasswordField,
    validateRequired,
    FormValidator,
    validateEmail
} from '~/components/common/form';
import { SignUpInfo } from '~/store';
import { MlButton } from '~/components/common';

interface SignUpForm extends SignUpInfo {
    passwordConfirmation: string;
}

const confirmationValidator: FormValidator<unknown, SignUpForm> = (_, form) => {
    if (form.password === form.passwordConfirmation) return null;

    return { message: 'validations.passwordConfirmation' };
};

export default defineComponent({
    name: 'SignUp',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlTextField,
        MlPasswordField
    },

    setup() {
        const authForm = useForm<SignUpForm>({
            username: {
                value: '',
                validators: [validateRequired<SignUpForm>('validations.required', { field: 'Username' })]
            },
            email: {
                value: '',
                validators: [
                    validateRequired<SignUpForm>('validations.required', { field: 'Email' }),
                    validateEmail<SignUpForm>()
                ]
            },
            password: {
                value: '',
                affects: ['passwordConfirmation'],
                validators: [validateRequired<SignUpForm>('validations.required', { field: 'Password' })]
            },
            passwordConfirmation: {
                value: '',
                validators: [
                    validateRequired<SignUpForm>('validations.required', { field: 'Confirmation' }),
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

.ml-sign-up__to-sign-in-question,
.ml-sign-up__to-sign-in-link {
    font-size: 14px;
    line-height: 20px;
}

.ml-sign-up__to-sign-in-question {
    color: #808080;
}

.ml-sign-up__to-sign-in-link {
    text-transform: uppercase;
    margin-left: 5px;
}
</style>
