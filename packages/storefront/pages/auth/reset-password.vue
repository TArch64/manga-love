<template>
    <div v-if="passwordReset.isValid">
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <MlForm :form="form" :loading="isProcessing" @submit="resetPassword">
            <MlPasswordField
                name="password"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.password.label')"
            />

            <MlPasswordField
                name="passwordConfirmation"
                class="ml-margin-bottom--md"
                :label="$t('auth.form.passwordConfirmation.label')"
            />

            <MlButton class="ml-width--full" skin="primary" type="submit" size="lg" :loading="isProcessing">
                {{ $t('auth.resetPassword.submit') }}
            </MlButton>
        </MlForm>
    </div>

    <div v-else>
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <p class="ml-margin-bottom--lg">
            {{ $t('auth.resetPassword.errors.invalidCode') }}
        </p>

        <MlButton class="ml-width--full ml-margin-bottom--md" link="/auth/forgot" skin="primary" size="lg">
            {{ $t('auth.resetPassword.toForgot') }}
        </MlButton>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, useAsync } from '@nuxtjs/composition-api';
import {
    useForm,
    MlForm,
    MlPasswordField,
    validateRequired,
    validatePasswordConfirmation
} from '~/components/common/form';
import { ResetPasswordInfo, ResetPasswordState, useAuthStore } from '~/store';
import { MlButton } from '~/components/common';
import { useRouter, useToaster } from '~/composables';

interface ResetPasswordForm extends ResetPasswordInfo {
    passwordConfirmation: string;
}

export default defineComponent({
    name: 'ResetPassword',
    layout: 'auth',

    components: {
        MlButton,
        MlForm,
        MlPasswordField
    },

    setup() {
        const authStore = useAuthStore();
        const toaster = useToaster();
        const router = useRouter();
        const isProcessing = ref(false);

        const passwordReset = useAsync<ResetPasswordState>(async () => {
            const code = router.activatedRoute.value.query.code as string;
            await authStore.loadResetPasswordState(code);
            return authStore.resetPasswordState!;
        });

        const form = useForm<ResetPasswordForm>({
            password: {
                value: '',
                validators: [
                    validateRequired({ field: 'Password' })
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

        async function resetPassword(): Promise<void> {
            try {
                isProcessing.value = true;
                await authStore.resetPassword(form.data);
                router.push('/');
            } catch (error) {
                toaster.show({ path: 'errors.somethingWentWrong' });
                isProcessing.value = false;
            }
        }

        return {
            form,
            resetPassword,
            passwordReset,
            isProcessing
        };
    }
});
</script>

<style scoped>
.ml-reset-password__heading {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 30px;
}
</style>
