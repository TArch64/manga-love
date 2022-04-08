<template>
    <div>
        {{ $t('hello') }} {{ userStore.currentUser || 'No User' }}
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ssrPromise } from '@nuxtjs/composition-api';
import { useUserStore } from '~/store/user-store';

const userStore = useUserStore();
const userLoader = ssrPromise(() => userStore.loadCurrentUser());

onBeforeMount(async () => await userLoader);
</script>
