<template>
    <label class="ml-form-field" @focusout="formContext.makeTouched()">
        <div class="ml-form-field__control" :class="controlClasses">
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
        </div>

        <p class="ml-form-field__error" v-if="isError">
            {{ $t(formContext.error.value.message, formContext.error.value.params || {}) }}
        </p>
    </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@nuxtjs/composition-api';
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

        if (!formRegister) {
            throw new Error('MlFormField should be used inside MlForm component');
        }

        const formContext = formRegister.register(props.name);
        const isError = computed(() => formContext.error.value && formContext.touched.value);

        const controlClasses = computed(() => ({
            'ml-form-field__control--error': isError.value,
            'ml-form-field__control--disabled': formContext.disabled.value
        }));

        return { formContext, isError, controlClasses };
    }
});
</script>

<style scoped>
.ml-form-field {
    display: block;
}

.ml-form-field__control {
    display: flex;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 10px 15px;
    transition: border-color 0.1s ease-out;
    will-change: border-color;
}

.ml-form-field__control:not(.ml-form-field__control--disabled) {

    &:hover,
    &:focus-within {
        border-color: #242424;
    }
}

.ml-form-field__control--disabled {
    opacity: 0.5;
}

.ml-form-field__control--error:not(.ml-form-field__control--disabled) {
    border-color: #AE2727 !important;
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

.ml-form-field__error {
    padding-top: 5px;
    margin: 0;
    color: #AE2727;
    font-size: 14px;
}
</style>
