<template>
    <div>
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>

        <MlForm :form="form" :loading="isProcessing" @submit="askResetPassword">
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

            <MlButton class="ml-width--full ml-margin-bottom--lg" skin="primary" type="submit" size="lg" :loading="isProcessing">
                {{ $t('auth.forgot.submit') }}
            </MlButton>

            <MlButton class="ml-width--full ml-text--uppercase" link="/auth/sign-in" skin="flat" size="lg">
                {{ $t('auth.forgot.toSignIn') }}
            </MlButton>
        </MlForm>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, validateRequired, validateEmail } from '~/components/common/form';
import { ForgotInfo, useAuthStore } from '~/store';
import { MlButton } from '~/components/common';
import { isApiError, useToaster, ToastrMessage } from '~/composables';

export default defineComponent({
    name: 'Forgot',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlTextField
    },

    setup() {
        const toaster = useToaster();
        const authStore = useAuthStore();
        const isProcessing = ref(false);

        const form = useForm<ForgotInfo>({
            email: {
                value: '',
                validators: [
                    validateRequired<ForgotInfo>('validations.required', { field: 'Email' }),
                    validateEmail<ForgotInfo>()
                ]
            }
        });

        function getApiError(error: unknown): ToastrMessage {
            if (isApiError(error, 'invalid-email')) {
                return { path: 'auth.forgot.errors.invalidEmail' };
            }
            return { path: 'errors.somethingWentWrong' };
        }

        async function askResetPassword(): Promise<void> {
            try {
                isProcessing.value = true;
                await authStore.askResetPassword(form.data);
                toaster.show({ path: 'auth.forgot.resetAsked' });
            } catch (error) {
                toaster.show(getApiError(error));
                isProcessing.value = false;
            }
        }

        return { form, askResetPassword, isProcessing };
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
