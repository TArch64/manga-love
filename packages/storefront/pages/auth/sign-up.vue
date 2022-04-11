<template>
    <div>
        <h1 class="ml-sign-up__greeting">
            {{ $t('auth.signUp.greeting') }}
        </h1>

        <MlForm :form="authForm" @submit="signUp">
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

            <MlButton class="ml-width--full ml-sign-up__submit" type="submit" skin="primary" size="lg">
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
import { defineComponent, ref, useContext, useRouter } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlTextField,
    MlPasswordField,
    validateRequired,
    FormValidator,
    validateEmail
} from '~/components/common/form';
import { SignUpInfo, useUserStore } from '~/store';
import { MlButton } from '~/components/common';
import { isBrowserHttpError } from '~/composables';

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
        const userStore = useUserStore();
        const nuxt = useContext();
        const router = useRouter();
        const isProcessing = ref(false);

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

        function getErrorMessage(error: unknown): string {
            if (isBrowserHttpError(error, 'email-already-taken')) {
                return nuxt.app.i18n.t('auth.errors.unique', { field: 'User with this email' }) as string;
            }
            if (isBrowserHttpError(error, 'username-already-taken')) {
                return nuxt.app.i18n.t('auth.errors.unique', { field: 'User with this name' }) as string;
            }
            return nuxt.app.i18n.t('auth.errors.somethingWentWrong') as string;
        }

        async function signUp(): Promise<void> {
            isProcessing.value = true;

            try {
                await userStore.signUp(authForm.data);
                router.push(nuxt.localePath('/'));
            } catch (error: unknown) {
                isProcessing.value = false;
                nuxt.$toast.show(getErrorMessage(error));
            }
        }

        return { authForm, signUp };
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

.ml-sign-up__submit {
    margin-bottom: 60px;
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
