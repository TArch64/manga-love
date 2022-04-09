<template>
    <label class="ml-form-field">
        <div class="ml-form-field__main">
            <p class="ml-form-field__label">{{ label }}</p>

            <slot
                name="input"
                :value="formContext.data.value"
                :setValue="formContext.setValue"
            />
        </div>

        <div class="ml-form-field__end-icon" v-if="$scopedSlots['end-icon']">
            <slot name="end-icon" />
        </div>
    </label>
</template>

<script lang="ts">
import { defineComponent, inject } from '@nuxtjs/composition-api';
import { FORM_REGISTER, FormRegister } from './ml-form.vue';

export default defineComponent({
    name: 'MlFormField',

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
    display: flex;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 10px 15px;
    transition: border-color 0.1s ease-out;
    will-change: border-color;

    &:hover,
    &:focus-within {
        border-color: #B3B3B3;
    }
}

.ml-form-field__main {
    flex-grow: 1;
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

.ml-form-field__end-icon {
    display: flex;
    align-items: center;
}
</style>
