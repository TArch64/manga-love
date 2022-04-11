<template>
    <div>
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>

        <MlForm :form="form">
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
import { defineComponent } from '@nuxtjs/composition-api';
import { MlForm, useForm, MlTextField, validateRequired, validateEmail } from '~/components/common/form';
import { ForgotInfo } from '~/store';
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
        const form = useForm<ForgotInfo>({
            email: {
                value: '',
                validators: [
                    validateRequired<ForgotInfo>('validations.required', { field: 'Email' }),
                    validateEmail<ForgotInfo>()
                ]
            }
        });

        return { form };
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
