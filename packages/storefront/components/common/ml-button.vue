<template>
    <MlButtonWrapper
        class="ml-button"
        :class="buttonClasses"
        :disabled="loading"
        :type="type"
        :link="buttonLink"
        @click="$emit('click', $event)"
    >
        <slot />
    </MlButtonWrapper>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import MlButtonWrapper from './ml-button-wrapper.vue';

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

    components: {
        MlButtonWrapper
    },

    props: {
        type: {
            type: String as PropType<ButtonType>,
            required: false,
            default: ButtonType.BUTTON
        },

        link: {
            type: [String, Array] as PropType<string | [string, Record<string, string>]>,
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
        },

        loading: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    emits: ['click'],

    setup(props, context) {
        const buttonClasses = computed(() => ({
            [`ml-button--${props.skin}`]: !!props.skin,
            [`ml-button--${props.size}`]: !!props.size,
            'ml-button--link': !!props.link,
            'ml-button--loading': props.loading
        }));

        const buttonLink = computed(() => {
            if (typeof props.link === 'string') return props.link;

            const [path, params] = props.link;
            const urlParams = new URLSearchParams(params || {}).toString();

            return urlParams ? `${path}?${urlParams}` : path;
        });

        return {
            buttonClasses,
            buttonLink
        };
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
    cursor: pointer;

    &:hover,
    &:focus {
        outline: none;
    }
}

.ml-button--link {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &:active,
    &:visited {
        color: inherit;
    }

    &:disabled {
        opacity: 0.5;
    }
}

.ml-button--primary {
    background: #242424;
    box-shadow: 0 10px 20px rgba(48, 48, 48, 0.25);
    border-radius: 8px;
    color: #FFF;
    position: relative;
    transition: opacity 0.1s ease-out, box-shadow 0.1s ease-out;
    will-change: opacity, box-shadow;

    &:active,
    &:visited {
        color: #FFF;
    }

    &:not(.ml-button--loading):disabled {
        background-color: #DBDBDB;
        box-shadow: none
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus {
        opacity: 0.8;
    }

    &.ml-button--loading::after {
        --loader-color: #FFF;
    }
}

.ml-button--flat {
    color: inherit;
    border-radius: 8px;
    transition: background-color 0.1s ease-out;
    will-change: background-color;

    &:active,
    &:visited {
        color: inherit;
    }

    &:disabled {
        opacity: 0.5;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus {
        background-color: rgba(0, 0, 0, 0.05);
    }
}

.ml-button--lg {
    padding: 12px;
    font-size: 18px;
    line-height: 25px;
}

.ml-button--loading {

    &::before {
        content: "";
        position: absolute;
        border-radius: inherit;
        background-color: inherit;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    &::after {
        content: "";
        position: absolute;
        top: calc(50% - 15px);
        left: calc(50% - 15px);
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 2px solid var(--loader-color);
        border-top-color: transparent;
        animation: spin-loader 1s infinite linear;
    }
}

@keyframes spin-loader {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
}
</style>
