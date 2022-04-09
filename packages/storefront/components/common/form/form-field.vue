<template>
    <label class="ml-form-field">
        <p class="ml-form-field__label">{{ label }}</p>

        <slot
            name="input"
            :value="formContext.data.value"
            :setValue="formContext.setValue"
        />
    </label>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api';
import { FORM_REGISTER, FormRegister } from './form-wrapper.vue';

export default defineComponent({
    name: 'FormField',

    props: {
        name: {
            type: String,
            required: true
        },

        label: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const formRegister = inject<FormRegister<unknown>>(FORM_REGISTER);
        const formContext = formRegister!.register(props.name);

        return { formContext };
    }
});
</script>

<style scoped>
.ml-form-field {
    display: block;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 10px 15px;

    &:focus-within {
        border-color: #B3B3B3;
    }
}

.ml-form-field__label {
    margin-top: 0;
    margin-bottom: 5px;
    font-family: var(--font-sans);
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #808080;
}
</style>
