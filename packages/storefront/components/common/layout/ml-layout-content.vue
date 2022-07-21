<template>
    <div class="ml-layout-content">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'MlLayoutContent'
});
</script>

<style scoped>
.ml-layout-content {
    background-color: #FFF;
}
</style>
