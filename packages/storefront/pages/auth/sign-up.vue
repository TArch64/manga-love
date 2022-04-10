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
                required
            />

            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--md"
                placeholder="Type e-mail"
                label="e-mail"
                required
            />

            <MlPasswordField
                class="ml-margin-bottom--md"
                label="Password"
                name="password"
                required
            />

            <MlPasswordField
                label="Confirm password"
                name="passwordConfirmation"
                required
            />
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useForm, MlForm, MlTextField, MlPasswordField } from '~/components/common/form';
import { SignUpInfo } from '~/store';

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
        const authForm = useForm<SignUpForm>({
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
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
