<template>
    <div class="ml-flex ml-flex--column">
        <h1 class="ml-sign-up__greeting">
            {{ $t('auth.signUp.greeting') }}
        </h1>

        <MlForm class="ml-flex--grow" :form="authForm" :loading="isProcessing" @submit="signUp">
            <MlTextField
                name="username"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.username.label')"
                :placeholder="$t('auth.form.username.placeholder')"
            />

            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.email.label')"
                :placeholder="$t('auth.form.email.placeholder')"
            />

            <MlPasswordField
                class="ml-margin-bottom--md"
                name="password"
                :label="$t('auth.form.password.label')"
            />

            <MlPasswordField
                name="passwordConfirmation"
                class="ml-margin-bottom--lg"
                :label="$t('auth.form.passwordConfirmation.label')"
            />

            <MlButton class="ml-width--full ml-sign-up__submit ml-margin-top--auto" type="submit" skin="primary" size="lg" :loading="isProcessing">
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
import { defineComponent, ref } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlTextField,
    MlPasswordField,
    validateRequired,
    validatePasswordConfirmation,
    validateEmail,
    validatePassword
} from '~/components/common/form';
import { SignUpInfo, useAuthStore } from '~/store';
import { MlButton } from '~/components/common';
import { isApiError, useRouter, useToaster, ToastrMessage } from '~/composables';

interface SignUpForm extends SignUpInfo {
    passwordConfirmation: string;
}

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
        const authStore = useAuthStore();
        const router = useRouter();
        const toaster = useToaster();
        const isProcessing = ref(false);

        const authForm = useForm<SignUpForm>({
            username: {
                value: '',
                validators: [
                    validateRequired({ field: 'Username' })
                ]
            },
            email: {
                value: '',
                validators: [
                    validateRequired({ field: 'Email' }),
                    validateEmail()
                ]
            },
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

        function getApiError(error: unknown): ToastrMessage {
            if (isApiError(error, 'email-already-taken')) {
                return { path: 'errors.unique', data: { field: 'User with this email' } };
            }
            if (isApiError(error, 'username-already-taken')) {
                return { path: 'errors.unique', data: { field: 'User with this name' } };
            }
            return { path: 'errors.somethingWentWrong' };
        }

        async function signUp(): Promise<void> {
            isProcessing.value = true;

            try {
                await authStore.signUp(authForm.data);
                router.push('/');
            } catch (error: unknown) {
                isProcessing.value = false;
                toaster.show(getApiError(error));
            }
        }

        return { authForm, signUp, isProcessing };
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
