<template>
    <div class="ml-sign-in ml-padding-bottom--xlg">
        <h1 class="ml-sign-in__greeting">
            <span class="ml-sign-in__greeting-hello">
                {{ $t('auth.signIn.greetingHello') }}
            </span>

            <br>

            <span class="ml-sign-in__greeting-welcome">
                {{ $t('auth.signIn.greeting') }}
            </span>
        </h1>

        <MlForm class="ml-flex--grow" :form="authForm" :disabled="isProcessing" @submit="signIn">
            <MlTextField
                class="ml-margin-bottom--md"
                name="email"
                type="email"
                :label="$t('auth.form.email.label')"
                :placeholder="$t('auth.form.email.placeholder')"
            />

            <MlPasswordField
                class="ml-margin-bottom--xlg"
                name="password"
                :label="$t('auth.form.password.label')"
            />

            <MlButton class="ml-width--full ml-margin-top--auto ml-margin-bottom--md" :link="forgotLink" skin="flat" size="lg">
                {{ $t('auth.signIn.toForgot') }}
            </MlButton>

            <MlButton class="ml-width--full ml-margin-bottom--md" type="submit" skin="primary" size="lg" :loading="isProcessing">
                {{ $t('auth.signIn.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-up" skin="flat" size="lg">
                {{ $t('auth.signIn.toSignUp') }}
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, MlPasswordField, validateRequired, validateEmail } from '~/components/common/form';
import { MlButton } from '~/components/common';
import { useAuthStore, SignInCredentials } from '~/store';
import { isApiError, useToaster, ToastrMessage, useRouter } from '~/composables';

export default defineComponent({
    name: 'SignIn',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlTextField,
        MlPasswordField
    },

    head: {
        title: 'Sign In'
    },

    setup() {
        const authStore = useAuthStore();
        const router = useRouter();
        const toaster = useToaster();
        const isProcessing = ref(false);

        const authForm = useForm<SignInCredentials>({
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
                    validateRequired({ field: 'Password' })
                ]
            }
        });

        const forgotLink = computed(() => {
            const email = authForm.data.email;
            const params = email ? { email } : null;

            return ['/auth/forgot', params];
        });

        function getApiError(error: unknown): ToastrMessage {
            if (isApiError(error, 'bad-credentials')) {
                return { path: 'auth.signIn.errors.badCredentials' };
            }
            return { path: 'errors.somethingWentWrong' };
        }

        async function signIn(): Promise<void> {
            isProcessing.value = true;

            try {
                await authStore.signIn(authForm.data);
                router.push('/');
            } catch (error: unknown) {
                authForm.update({ password: '' });
                isProcessing.value = false;
                toaster.show(getApiError(error));
            }
        }

        return {
            authForm,
            isProcessing,
            signIn,
            forgotLink
        };
    }
});
</script>

<style scoped>
.ml-sign-in {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.ml-sign-in__greeting {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 40px;
}

.ml-sign-in__greeting-hello {
    color: #909090;
}

.ml-sign-in__greeting-welcome {
    text-transform: uppercase;
}
</style>
