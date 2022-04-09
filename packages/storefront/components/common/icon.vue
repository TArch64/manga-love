<template>
    <svg :width="size" :height="size">
        <use :href="`/icons.svg#${name}`" />
    </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'Icon',

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
