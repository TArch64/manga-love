<template>
    <MlAuthAction
        :title="$t('auth.emailVerification.title', { name: username })"
        :description="$t('auth.emailVerification.description')"
    >
        <template #actions>
            <MlButton class="ml-width--full" type="button" skin="primary" size="lg">
                {{ $t('auth.emailVerification.confirm') }}
            </MlButton>
        </template>
    </MlAuthAction>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { MlAuthAction } from '~/components/auth';
import { MlButton } from '~/components/common';
import { useAuthStore } from '~/store';

export default defineComponent({
    name: 'EmailVerificationValid',
    layout: 'none',

    components: {
        MlAuthAction,
        MlButton
    },

    setup() {
        const authStore = useAuthStore();
        const username = computed(() => authStore.emailVerificationState!.name);

        return { username };
    }
});
</script>
