<template>
    <div class="ml-padding-bottom--xlg">
        <MlAuthResult type="success" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { MlAuthResult } from '~/components/auth';

export default defineComponent({
    name: 'EmailVerification',
    layout: 'auth',

    components: {
        MlAuthResult
    }
});
</script>
