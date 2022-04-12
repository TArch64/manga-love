<template>
    <div>
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>

        <MlForm :form="form" @submit="askResetPassword">
            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.email.label')"
                :placeholder="$t('auth.form.email.placeholder')"
            />

            <p class="ml-forgot__note ml-margin-top--none ml-margin-bottom--lg">
                {{ $t('auth.forgot.note') }}
            </p>

            <MlButton class="ml-width--full ml-margin-bottom--lg" skin="primary" type="submit" size="lg">
                {{ $t('auth.forgot.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-in" skin="flat" size="lg">
                {{ $t('auth.forgot.toSignIn') }}
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, validateRequired, validateEmail } from '~/components/common/form';
import { ForgotInfo, useUserStore } from '~/store';
import { MlButton } from '~/components/common';
import { isBrowserHttpError, useToaster, ToastrMessage } from '~/composables';

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
        const toaster = useToaster();
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

        function getErrorMessage(error: unknown): ToastrMessage {
            if (isBrowserHttpError(error, 'invalid-email')) {
                return { path: 'errors.invalidEmail' };
            }
            return { path: 'errors.somethingWentWrong' };
        }

        async function askResetPassword(): Promise<void> {
            try {
                await userStore.askResetPassword(form.data);
                toaster.show({ path: 'auth.forgot.resetAsked' });
            } catch (error) {
                toaster.show(getErrorMessage(error));
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

.ml-forgot__note {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #808080;
}
</style>
