<template>
    <MlFormField :name="name" :label="label">
        <template #input="{ value, setValue }">
            <MlInput
                placeholder="**************"
                :type="inputType"
                :value="value"
                @input="setValue"
            />
        </template>

        <template #end-icon>
            <MlButton
                tabindex="-1"
                class="ml-form-password-field__visibility"
                :class="visibilityButtonClasses"
                @click="togglePasswordVisibility"
            >
                <MlIcon name="password-visibility" size="20px" />
            </MlButton>
        </template>
    </MlFormField>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';
import { MlIcon, MlButton } from '~/components/common';
import MlFormField from './ml-form-field.vue';
import MlInput from './ml-input.vue';


export default defineComponent({
    name: 'MlPasswordField',

    components: {
        MlFormField,
        MlButton,
        MlIcon,
        MlInput
    },

    props: {
        name: MlFormField.props!.name,
        label: MlFormField.props!.label
    },

    setup() {
        const isPasswordVisible = ref(false);

        const visibilityButtonClasses = computed(() => ({
            'ml-form-password-field__visibility--visible': isPasswordVisible.value
        }));

        const inputType = computed(() => isPasswordVisible.value ? 'text' : 'password');

        function togglePasswordVisibility(): void {
            isPasswordVisible.value = !isPasswordVisible.value;
        }

        return {
            visibilityButtonClasses,
            inputType,
            togglePasswordVisibility
        };
    }
});
</script>

<style scoped>
.ml-form-password-field__visibility {
    padding: 5px;
    margin-right: -5px;
    position: relative;
    transition: opacity 0.1s ease-out;
    --icon-foreground: #242424;

    &::before {
        content: "";
        position: absolute;
        width: 58%;
        height: 55%;
        left: 20%;
        top: 20%;
        background-image: linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(0,0,0,1) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%),
            linear-gradient(to top right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), rgba(0,0,0,1) 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%);
        transform-origin: 0 0;
        transform: scale(0);
        transition: transform 0.1s ease-out;
    }

    &:hover,
    &:focus {
        opacity: 0.7;
    }
}

.ml-form-password-field__visibility--visible::before {
    transform: none;
}
</style>
