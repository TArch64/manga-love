<template>
    <form @submit.prevent="onSubmit">
        <slot />
    </form>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, provide, reactive, UnwrapRef } from '@nuxtjs/composition-api';

export const FORM_REGISTER = Symbol('FORM_REGISTER');

export interface FormControlContext<T> {
    value: ComputedRef<T>;
    setValue(value: T): void;
}

export interface FormRegister<T> {
    register(fieldId: string): FormControlContext<T>;
}

export interface FormAccessor<T> {
    data: UnwrapRef<T>;
    update(changed: T): void;
}

export function useForm<T extends {}>(initial: T): FormAccessor<T> {
    const data = reactive(initial);

    return {
        data,
        update: (changed: T) => Object.assign(data, changed)
    };
}

export default defineComponent({
    name: 'FormWrapper',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    emits: ['change', 'submit'],

    setup(props, context) {
        const registerField = (fieldId: string): FormControlContext<unknown> => ({
            data: computed(() => props.data[fieldId]),

            setValue(value: unknown): void {
                context.emit('change', {
                    ...props.data,
                    [fieldId]: value
                });
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
