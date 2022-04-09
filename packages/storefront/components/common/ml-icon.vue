<template>
    <svg class="ml-icon" :width="size" :height="size">
        <use :href="`/icons.svg#${name}`" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'MlIcon',

    props: {
        name: {
            type: String,
            required: true
        },

        size: {
            type: [Number, String],
            required: true
        }
    }
});
</script>

<style scoped>
.ml-icon {
    line-height: 1;
}
</style>
