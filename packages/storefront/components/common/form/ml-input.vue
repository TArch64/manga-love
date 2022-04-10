<template>
    <input
        class="ml-input"
        :value="value"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        @input="$emit('input', $event.target.value)"
    >
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export enum TextFieldType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password'
}

export default defineComponent({
    name: 'MlInput',

    props: {
        type: {
            type: String as PropType<TextFieldType>,
            required: false,
            default: TextFieldType.TEXT
        },

        value: {
            type: String,
            required: true
        },

        placeholder: {
            type: String,
            required: true
        },

        required: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ['input']
});
</script>

<style scoped>
.ml-input {
    border: none;
    background: none;
    padding: 0;
    width: 100%;
    display: block;
    outline: none;
    font-size: 16px;
    line-height: 22px;
    color: #242424;

    &::placeholder {
        color: #B3B3B3;
    }
}
</style>
