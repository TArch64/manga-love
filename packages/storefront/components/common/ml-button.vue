<template>
    <button
        class="ml-button"
        :class="buttonClasses"
        v-bind="buttonAttrs"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit'
}

export enum ButtonSkin {
    PRIMARY = 'primary',
    FLAT = 'flat'
}

export enum ButtonSize {
    LG = 'lg'
}

export default defineComponent({
    name: 'MlButton',

    props: {
        type: {
            type: String as PropType<ButtonType>,
            required: false,
            default: ButtonType.BUTTON
        },

        link: {
            type: String as PropType<ButtonType>,
            required: false,
            default: ''
        },

        skin: {
            type: String as PropType<ButtonSkin>,
            required: false,
            default: null
        },

        size: {
            type: String as PropType<ButtonSize>,
            required: false,
            default: null
        }
    },

    emits: ['click'],

    setup(props) {
        const buttonClasses = computed(() => ({
            [`ml-button--${props.skin}`]: !!props.skin,
            [`ml-button--${props.size}`]: !!props.size,
            'ml-button--link': !!props.link
        }));

        const buttonAttrs = computed(() => {
            if (props.link) {
                return { is: 'NuxtLink', to: props.link, role: 'button' };
            }
            return { type: props.type };
        });

        return { buttonClasses, buttonAttrs };
    }
});
</script>

<style scoped>
.ml-button {
    border: none;
    background: none;
    padding: 0;
    display: inline-flex;
    justify-content: center;

    &:hover,
    &:focus {
        outline: none;
    }
}

.ml-button--link {
    color: inherit;
    text-decoration: none;

    &:active,
    &:visited {
        color: inherit;
    }
}

.ml-button--primary {
    background: #242424;
    box-shadow: 0 10px 20px rgba(48, 48, 48, 0.25);
    border-radius: 8px;
    color: #FFF;
    transition: opacity 0.1s ease-out;
    will-change: opacity;

    &:hover,
    &:focus {
        opacity: 0.8;
    }
}

.ml-button--flat {
    border-radius: 8px;
    transition: background-color 0.1s ease-out;
    will-change: background-color;

    &:hover,
    &:focus {
        background-color: rgba(0, 0, 0, 0.05);
    }
}

.ml-button--lg {
    padding: 12px;
    font-size: 18px;
    line-height: 25px;
}
</style>
