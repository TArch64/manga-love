<template>
    <MlAuthAction
        :title="$t('auth.resetPassword.success.title')"
        :description="$t('auth.resetPassword.success.description')"
        result-type="success"
    >
        <template #actions>
            <MlButton class="ml-width--full" skin="outlined" size="lg" link="/">
                {{ $t('auth.resetPassword.toHome') }}
            </MlButton>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlAuthAction } from '~/components/auth';
import { MlButton } from '~/components/common';

export default defineComponent({
    name: 'ResetPasswordSuccess',

    components: {
        MlAuthAction,
        MlButton
    }
});
</script>
