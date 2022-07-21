<template>
    <div class="ml-flex ml-flex--column ml-padding-bottom--xlg">
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>

        <p class="ml-forgot__note">
            {{ $t('auth.forgot.note') }}
        </p>

        <MlForm class="ml-flex--grow" :form="form" :loading="isProcessing" @submit="askResetPassword">
            <MlTextField
                name="email"
                type="email"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.email.label')"
                :placeholder="$t('auth.form.email.placeholder')"
            />

            <MlButton class="ml-width--full ml-margin-top--auto ml-margin-bottom--lg" skin="primary" type="submit" size="lg" :loading="isProcessing">
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
import { useToaster, ToastrMessage, useRouter } from '~/composables';
import { isApiError } from '~/utils';

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
        const router = useRouter();
        const authStore = useAuthStore();
        const isProcessing = ref(false);

        const form = useForm<ForgotInfo>({
            email: {
                value: router.activatedRoute.value.query.email as string || '',
                validators: [
                    validateRequired({ field: 'Email' }),
                    validateEmail()
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
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding-top: 50px;
    margin-top: 0;
    margin-bottom: 50px;
    text-transform: uppercase;
    color: #303030;
}

.ml-forgot__note {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #808080;
    margin-top: 0;
    margin-bottom: 25px;
}
</style>
