<template>
    <div>
        <h1 class="ml-forgot__heading">
            {{ $t('auth.forgot.heading') }}
        </h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Forgot',
    layout: 'auth'
});
</script>

<style scoped>
.ml-forgot__heading {
    font-family: var(--font-serif);
    font-size: 30px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 40px;
}
</style>
