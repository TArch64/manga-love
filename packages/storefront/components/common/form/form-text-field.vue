<template>
    <FormField :name="name" :label="label">
        <template #input="{ value, setValue }">
            <input
                class="ml-form-text-field__input"
                :value="value"
                :placeholder="placeholder"
                :type="type"
                @input="setValue($event.target.value)"
            >
        </template>
    </FormField>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import FormField from './form-field.vue';

export enum TextFieldType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password'
}

export default defineComponent({
    name: 'FormTextField',

    components: {
        FormField
    },

    props: {
        name: FormField.props!.name,
        label: FormField.props!.label,

        type: {
            type: String as PropType<TextFieldType>,
            required: false,
            default: 'text'
        },

        placeholder: {
            type: String,
            required: true
        }
    }
});
</script>

<style scoped>
.ml-form-text-field__input {
    border: none;
    background: none;
    padding: 0;
    width: 100%;
    display: block;
    outline: none;
    font-size: 16px;
    line-height: 22px;
    color: #242424;
}
</style>
