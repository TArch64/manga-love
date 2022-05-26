<template>
    <form novalidate @submit.prevent="submit">
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

    setup(props, context) {
        const fields = props.form._fields;

        function registerField(fieldId: string): FormControlContext<unknown> {
            const options = props.form._options[fieldId];

            if (!options) {
                throw new Error(`Unknown controls with name "${fieldId}"`);
            }

            const data = computed(() => props.form.data[fieldId]);
            const error = ref<Validation | null>(null);
            const touched = ref(false);

            function validate(): boolean {
                for (const validate of options.validators || []) {
                    error.value = validate(data.value as string, props.form.data);
                    if (error.value) return false;
                }
                return true;
            }

            function validateDepends(id: string = fieldId): void {
                for (const fieldId of Object.keys(fields)) {
                    const options = (fields[fieldId] as FormControlContext<unknown>);

                    options.validate();

                    if (options.dependsOn.includes(id)) {
                        validateDepends(fieldId);
                    }
                }

                for (const fieldId of options.affects || []) {
                    fields[fieldId].validate();
                }
            }

            fields[fieldId] = {
                data,
                error,
                touched,
                dependsOn: options.dependsOn || [],
                disabled: toRef(props, 'disabled'),
                validate,

                setValue(value: string): void {
                    props.form.update({ [fieldId]: value });
                    validate();
                    validateDepends();
                },

                makeTouched(): void {
                    touched.value = true;
                }
            };

            return fields[fieldId];
        }

        provide<FormRegister<unknown>>(FORM_REGISTER, {
            register: registerField
        });

        function submit(): void {
            if (props.form.validate()) {
                context.emit('submit');
            }
        }

        return { submit };
    }
});
</script>

<style scoped>
.ml-form__fieldset {
    border: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
