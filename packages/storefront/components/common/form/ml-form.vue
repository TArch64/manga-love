<template>
    <form @submit.prevent="$emit('submit')">
        <fieldset class="ml-form__fieldset" :disabled="disabled">
            <slot />
        </fieldset>
    </form>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, toRef } from '@nuxtjs/composition-api';
import { Validation } from './validators';
import { FormControlContext } from './use-form';

export const FORM_REGISTER = Symbol('FORM_REGISTER');

export interface FormRegister<T> {
    register(fieldId: string): FormControlContext<T>;
}

export default defineComponent({
    name: 'MlForm',

    props: {
        form: {
            type: Object,
            required: true
        },

        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ['submit'],

    setup(props) {
        const fields = props.form._fields;

        function registerField(fieldId: string): FormControlContext<unknown> {
            const options = props.form._options[fieldId];

            fields[fieldId] = {
                data: computed(() => props.form.data[fieldId]),
                error: ref<Validation | null>(null),
                touched: ref(false),
                disabled: toRef(props, 'disabled'),

                validate(): boolean {
                    for (const validate of options.validators || []) {
                        this.error.value = validate(this.data.value as string, props.form.data);
                        if (this.error.value) return false;
                    }
                    return true;
                },

                setValue(value: string): void {
                    props.form.update({ [fieldId]: value });
                    this.validate();

                    for (const fieldId of options.affects || []) {
                        fields[fieldId].validate();
                    }
                },

                makeTouched(): void {
                    this.touched.value = true;
                }
            };

            return fields[fieldId];
        }

        provide<FormRegister<unknown>>(FORM_REGISTER, {
            register: registerField
        });
    }
});
</script>

<style scoped>
.ml-form__fieldset {
    border: none;
    padding: 0;
    margin: 0;
}
</style>
