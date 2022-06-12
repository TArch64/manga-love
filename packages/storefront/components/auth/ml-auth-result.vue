<template>
    <div class="ml-auth-result">
        <h1 class="ml-auth-result__heading">
            {{ heading }}
        </h1>

        <div class="ml-auth-result__illustration">
            <MlIcon class="ml-width--full" type="auth" name="action-result" />

            <MlIcon
                class="ml-auth-result__illustration-icon"
                type="auth"
                size="50px"
                :name="signIconName"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { MlIcon } from '../common';

enum ResultType {
    SUCCESS = 'success'
}

export default defineComponent({
    name: 'MlAuthResult',

    components: {
        MlIcon
    },

    props: {
        type: {
            type: String as PropType<ResultType>,
            required: true
        }
    },

    setup(props) {
        const heading = computed(() => props.type === ResultType.SUCCESS ? 'SUCCESS' : 'Ooops..');
        const signIconName = computed(() => props.type === ResultType.SUCCESS ? 'success-sign' : 'error-sign');

        return {
            heading,
            signIconName
        };
    }
});
</script>

<style scoped>
.ml-auth-result {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ml-auth-result__heading {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 36px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #303030;
}

.ml-auth-result__illustration {
    position: relative;
    width: 100%;
}

.ml-auth-result__illustration-icon {
    transform: translate(-50%, 50%);
    position: absolute;
    bottom: 0;
    left: 50%;
}
</style>
