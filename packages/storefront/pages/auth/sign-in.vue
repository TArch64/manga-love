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

        <div class="ml-mobile-spacer" />

        <MlWrapper :data="authForm.data" @change="authForm.update">
            <MlTextField
                class="ml-margin-bottom--md"
                name="email"
                type="email"
                label="e-mail"
                placeholder="Type e-mail"
            />

            <MlPasswordField
                name="password"
                label="Password"
            />
        </MlWrapper>

        {{ authForm.data }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlWrapper, useForm, MlTextField, MlPasswordField } from '~/components/common/form';

export default defineComponent({
    name: 'SignIn',
    layout: 'auth',

    components: {
        MlWrapper,
        MlTextField,
        MlPasswordField
    },

    head: {
        title: 'Sign In'
    },

    setup() {
        const authForm = useForm({
            email: '',
            password: ''
        });

        return { authForm };
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
