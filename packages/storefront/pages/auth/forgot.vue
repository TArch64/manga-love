<template>
    <div>
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>

        <MlForm :form="form" @submit="askResetPassword">
            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--xlg"
                :label="$t('auth.form.email.label')"
                :placeholder="$t('auth.form.email.placeholder')"
            />

            <MlButton class="ml-width--full" skin="primary" type="submit" size="lg">
                Reset
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, validateRequired, validateEmail } from '~/components/common/form';
import { ForgotInfo, useUserStore } from '~/store';
import { MlButton } from '~/components/common';

export default defineComponent({
    name: 'Forgot',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlTextField
    },

    setup() {
        const nuxt = useContext();
        const userStore = useUserStore();

        const form = useForm<ForgotInfo>({
            email: {
                value: '',
                validators: [
                    validateRequired<ForgotInfo>('validations.required', { field: 'Email' }),
                    validateEmail<ForgotInfo>()
                ]
            }
        });

        async function askResetPassword(): Promise<void> {
            try {
                await userStore.askResetPassword(form.data);
                const message = nuxt.app.i18n.t('auth.forgot.resetAsked') as string;
                nuxt.$toast.show(message);
            } catch (error) {
                const message = nuxt.app.i18n.t('auth.errors.somethingWentWrong') as string;
                nuxt.$toast.show(message);
            }
        }

        return { form, askResetPassword };
    }
});
</script>

<style scoped>
.ml-forgot__heading {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 40px;
}
</style>
