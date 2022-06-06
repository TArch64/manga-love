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

        <transition name="ml-form-field__error-container-" duration="150" @enter="onBeforeErrorEnter">
            <div class="ml-form-field__error-container" v-if="isError" ref="errorContainerRef">
                <p class="ml-form-field__error">
                    {{ $t(formContext.error.value.message, formContext.error.value.params || {}) }}
                </p>
            </div>
        </transition>
    </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, nextTick, ref, watch } from '@nuxtjs/composition-api';
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
        const errorContainerRef = ref(null);

        const controlClasses = computed(() => ({
            'ml-form-field__control--error': isError.value,
            'ml-form-field__control--disabled': formContext.disabled.value
        }));

        watch(formContext.error, async () => {
            await nextTick();

            if (errorContainerRef.value) {
                onBeforeErrorEnter(errorContainerRef.value);
            }
        });

        function onBeforeErrorEnter(el: HTMLElement): void {
            const errorEl = el.firstElementChild!;

            el.style.height = `${errorEl.scrollHeight}px`;
        }

        return {
            formContext,
            controlClasses,
            isError,
            errorContainerRef,
            onBeforeErrorEnter
        };
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

.ml-form-field__error-container {
    overflow: hidden;
    will-change: height, opacity;
    transition: height 100ms ease-out;
}

.ml-form-field__error-container--enter-active {
    transition: height 200ms ease-out, opacity 100ms 100ms ease-out;
}

.ml-form-field__error-container--leave-active {
    transition: height 200ms ease-out, opacity 150ms ease-out;
}

.ml-form-field__error-container--enter,
.ml-form-field__error-container--leave-to {
    height: 0 !important;
    opacity: 0;
}
</style>
