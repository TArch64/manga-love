<template>
    <div>
        {{ $t('hello') }} {{ currentUser || 'No User' }}
    </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '~/store/user-store';

const { currentUser } = useUserStore();
</script>
