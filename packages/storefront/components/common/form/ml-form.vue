<template>
    <form @submit.prevent="onSubmit">
        <slot />
    </form>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType, provide, reactive, UnwrapRef } from '@nuxtjs/composition-api';

export const FORM_REGISTER = Symbol('FORM_REGISTER');

export interface FormControlContext<T> {
    data: ComputedRef<T>;
    setValue(value: T): void;
}

export interface FormRegister<T> {
    register(fieldId: string): FormControlContext<T>;
}

export interface FormAccessor<T = Record<string, unknown>> {
    data: UnwrapRef<T>;
    update(changed: Partial<T>): void;
}

export function useForm<T extends {}>(initial: T): FormAccessor<T> {
    const data = reactive(initial);

    return {
        data,
        update: (changed: Partial<T>) => Object.assign(data, changed)
    };
}

export default defineComponent({
    name: 'MlForm',

    props: {
        form: {
            type: Object as PropType<FormAccessor>,
            required: true
        }
    },

    emits: ['change', 'submit'],

    setup(props, context) {
        const registerField = (fieldId: string): FormControlContext<unknown> => ({
            data: computed(() => props.form.data[fieldId]),

            setValue(value: unknown): void {
                props.form.update({ [fieldId]: value });
            }
        });

        provide<FormRegister<unknown>>(FORM_REGISTER, {
            register: registerField
        });

        return {
            onSubmit: (): void => context.emit('submit')
        };
    }
});
</script>
