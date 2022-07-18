<template>
    <div class="ml-auth-action">
        <h1 class="ml-auth-action__title" v-if="title">
            {{ title }}
        </h1>

        <div class="ml-auth-action__illustration" v-if="!form">
            <MlIcon
                class="ml-auth-action__illustration-image"
                type="auth"
                name="action-result"
            />

            <MlIcon
                class="ml-auth-action__illustration-icon"
                type="auth"
                size="50px"
                :name="resultIconName"
                v-if="isResultIconVisible"
            />
        </div>

        <p class="ml-auth-action__description">
            {{ description }}
        </p>

        <div class="ml-auth-action__actions">
            <slot name="actions" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { MlIcon } from '../common';

enum ResultType {
    SUCCESS = 'success',
    ERROR = 'error'
}

export default defineComponent({
    name: 'MlAuthAction',

    components: {
        MlIcon
    },

    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },

        description: {
            type: String,
            required: true
        },

        form: {
            type: Boolean,
            required: false,
            default: false
        },

        resultType: {
            type: String as PropType<ResultType>,
            required: false,
            default: ''
        }
    },

    setup(props) {
        const isResultIconVisible = computed(() => !!props.resultType);
        const resultIconName = computed(() => props.resultType === ResultType.SUCCESS ? 'success-sign' : 'error-sign');

        return {
            resultIconName,
            isResultIconVisible
        };
    }
});
</script>

<style scoped>
.ml-auth-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 500px;
    width: 100%;
    margin: auto;
    padding-top: 80px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;

    @media (min-width: 768px) {
        height: auto;
    }
}

.ml-auth-action__title {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 36px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #303030;
    margin-top: 0;
    margin-bottom: 30px;
}

.ml-auth-action__illustration {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin-bottom: 35px;

    &::before {
        content: "";
        display: block;
        padding-bottom: calc((320 / 374) * 100%);
    }
}

.ml-auth-action__illustration-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.ml-auth-action__illustration-icon {
    transform: translate(-50%, 50%);
    position: absolute;
    bottom: 0;
    left: 50%;
}

.ml-auth-action__description {
    font-family: var(--font-sans);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #606060;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 50px;
}

.ml-auth-action__actions {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: auto;
}
</style>
