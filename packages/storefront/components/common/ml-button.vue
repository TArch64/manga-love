<template>
    <button
        class="ml-button"
        :type="type"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export enum ButtonType {
    BUTTON = 'button'
}

export default defineComponent({
    name: 'MlButton',

    props: {
        type: {
            type: String as PropType<ButtonType>,
            required: false,
            default: ButtonType.BUTTON
        }
    },

    emits: ['click']
});
</script>

<style scoped>
.ml-button {
    border: none;
    background: none;
    padding: 0;
    display: inline-flex;

    &:hover,
    &:focus {
        outline: none;
    }
}
</style>
