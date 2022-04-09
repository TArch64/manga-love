<template>
    <div>
        {{ $t('hello') }} {{ currentUser || 'No User' }}
    </div>
</template>

<script lang="ts" setup>
import { toRefs } from '@nuxtjs/composition-api';
import { useUserStore } from '~/store/user-store';

const { currentUser } = toRefs(useUserStore());
</script>
