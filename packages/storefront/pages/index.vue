<template>
    <div>
        {{ $t('hello') }} {{ currentUser || 'No User' }}
    </div>
</template>

<script lang="ts" setup>
import { useQueryAsync } from '~/composables/apollo';
import { currentUserQuery } from '~/graphql/user';

const currentUser = useQueryAsync({ query: currentUserQuery });
</script>
