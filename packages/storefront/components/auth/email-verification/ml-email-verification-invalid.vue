<template>
    <MlAuthAction
        result-type="error"
        :title="$t('auth.emailVerification.error.title')"
        :description="$t('auth.emailVerification.error.description')"
    >
        <template #actions>
            <MlButton class="ml-width--full" skin="outlined" size="lg" link="/">
                {{ $t('auth.emailVerification.toHome') }}
            </MlButton>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlButton } from '~/components/common';
import MlAuthAction from '../ml-auth-action.vue';

export default defineComponent({
    name: 'MlEmailVerificationInvalid',

    components: {
        MlAuthAction,
        MlButton
    }
});
</script>
