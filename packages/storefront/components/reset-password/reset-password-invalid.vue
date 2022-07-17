<template>
    <MlAuthAction
        result-type="error"
        :title="$t('auth.resetPassword.error.title')"
        :description="$t('auth.resetPassword.error.description')"
    >
        <template #actions>
            <MlButton class="ml-width--full" skin="outlined" size="lg" link="/auth/forgot">
                {{ $t('auth.resetPassword.toForgot') }}
            </MlButton>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlAuthAction } from '~/components/auth';
import { MlButton } from '~/components/common';

export default defineComponent({
    name: 'ResetPasswordInvalid',

    components: {
        MlAuthAction,
        MlButton
    }
});
</script>
