<template>
    <form @submit.prevent="onSubmit">
        <slot />
    </form>
</template>

<script lang="ts">
import {
    computed,
    ComputedRef,
    defineComponent,
    provide,
    reactive, Ref,
    ref,
    UnwrapRef
} from '@nuxtjs/composition-api';
import { FormValidator, Validation } from './validators';

export const FORM_REGISTER = Symbol('FORM_REGISTER');

export interface FormControlContext<T> {
    data: ComputedRef<T>;
    error: Ref<Validation | null>;
    touched: Ref<boolean>;
    setValue(value: T): void;
    makeTouched(): void;
    validate(): void;
}

export interface FormRegister<T> {
    register(fieldId: string): FormControlContext<T>;
}

export interface FormControlOptions<T, F> {
    value: T;
    validators?: FormValidator<T, F>[];
    affects?: Array<keyof F>;
}

export type FormOptions<T = Record<string, unknown>> = {
    [field in keyof T]: FormControlOptions<T[field], T>;
};

export interface FormAccessor<T = Record<string, unknown>> {
    data: UnwrapRef<T>;
    _options: FormOptions<T>;
    update(changed: Partial<T>): void;
}

export function useForm<T extends object>(options: FormOptions<T>): FormAccessor<T> {
    const initial = (Object.entries(options) as [keyof T, FormControlOptions<keyof T, T>][])
        .map(([field, config]) => ({ [field]: config.value }))
        .reduce((collector, field) => ({ ...collector, ...field }));

    const data = reactive(initial as T);

    return {
        data,
        _options: options,

        update(changed: Partial<T>): void {
            Object.assign(data, changed);
        }
    };
}

export default defineComponent({
    name: 'MlForm',

    props: {
        form: {
            type: Object,
            required: true
        }
    },

    emits: ['submit'],

    setup(props, context) {
        const fields: Record<string, FormControlContext<unknown>> = {};

        function registerField(fieldId: string): FormControlContext<unknown> {
            const data = computed(() => props.form.data[fieldId]);
            const options = props.form._options[fieldId];
            const error = ref<Validation | null>(null);
            const touched = ref(false);

            function validate(): void {
                for (const validate of options.validators || []) {
                    error.value = validate(data.value as string, props.form.data);
                    if (error.value) break;
                }
            }

            fields[fieldId] = {
                data,
                error,
                touched,
                validate,

                setValue(value: string): void {
                    props.form.update({ [fieldId]: value });
                    validate();

                    for (const fieldId of options.affects || []) {
                        fields[fieldId].validate();
                    }
                },

                makeTouched: () => touched.value = true
            };

            return fields[fieldId];
        }

        provide<FormRegister<unknown>>(FORM_REGISTER, {
            register: registerField
        });

        return {
            onSubmit: (): void => context.emit('submit')
        };
    }
});
</script>
