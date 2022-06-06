<template>
    <NuxtLink role="button" :to="link" v-if="link">
        <slot />
    </NuxtLink>

    <button type="button" @click="$emit('click', $event)" v-else>
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, h } from '@nuxtjs/composition-api';

export default defineComponent({
    name: 'MlButtonWrapper',

    props: {
        link: {
            type: String,
            required: true
        }
    },

    emits: ['click']
});
</script>
