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
import { MlButton } from '~/components/common';
import MlAuthAction from '../ml-auth-action.vue';

export default defineComponent({
    name: 'MlResetPasswordInvalid',

    components: {
        MlAuthAction,
        MlButton
    }
});
</script>
