<template>
    <div class="ml-sign-in">
        <h1 class="ml-sign-in__greeting">
            <span class="ml-sign-in__greeting-hello">
                {{ $t('auth.signIn.greetingHello') }}
            </span>

            <br>

            <span class="ml-sign-in__greeting-welcome">
                {{ $t('auth.signIn.greeting') }}
            </span>
        </h1>

        <MlForm :form="authForm" @submit="signIn">
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

            <MlButton class="ml-width--full ml-margin-bottom--md" type="submit" skin="primary" size="lg">
                {{ $t('auth.signIn.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-up" skin="flat" size="lg">
                {{ $t('auth.signIn.toSignUp') }}
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, MlPasswordField, validateRequired, validateEmail } from '~/components/common/form';
import { MlButton } from '~/components/common';
import { useUserStore, SignInCredentials } from '~/store';

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
        const nuxt = useContext();

        const authForm = useForm<SignInCredentials>({
            email: {
                value: '',
                validators: [
                    validateRequired<SignInCredentials>('validations.required', { field: 'Email' }),
                    validateEmail<SignInCredentials>()
                ]
            },
            password: {
                value: '',
                validators: [validateRequired<SignInCredentials>('validations.required', { field: 'Password' })]
            }
        });

        const userStore = useUserStore();

        async function signIn(): Promise<void> {
            try {
                await userStore.signIn(authForm.data);
                const router = useRouter();
                router.push(nuxt.localePath('/'));
            } catch (error: unknown) {
                authForm.update({ password: '' });

                const message = nuxt.app.i18n.t('auth.errors.badCredentials');
                nuxt.$toast.show(message as string);
            }
        }

        return { authForm, signIn };
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
