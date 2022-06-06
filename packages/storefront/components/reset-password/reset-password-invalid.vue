<template>
    <div class="ml-flex ml-flex--column ml-padding-bottom--xlg">
        <h1 class="ml-reset-password__heading">
            {{ $t('auth.resetPassword.heading') }}
        </h1>

        <p class="ml-reset-password__note ml-margin-bottom--lg">
            {{ $t('auth.resetPassword.errors.invalidCode') }}
        </p>

        <MlButton class="ml-width--full ml-margin-top--auto ml-margin-bottom--md" link="/auth/forgot" skin="primary" size="lg">
            {{ $t('auth.resetPassword.toForgot') }}
        </MlButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlButton } from '~/components/common';

export default defineComponent({
    name: 'ResetPasswordInvalid',
    layout: 'auth',

    components: {
        MlButton
    }
});
</script>
