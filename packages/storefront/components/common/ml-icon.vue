<template>
    <svg class="ml-icon" v-bind="iconSize">
        <use :href="iconHref" />
    </svg>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';

enum IconType {
    AUTH = 'auth',
    COMMON = 'common'
}

export default defineComponent({
    name: 'MlIcon',

    props: {
        type: {
            type: String as PropType<IconType>,
            required: false,
            default: IconType.COMMON
        },

        name: {
            type: String,
            required: true
        },

        size: {
            type: [Number, String],
            required: false,
            default: ''
        }
    },

    setup(props) {
        const iconHref = computed(() => `/${props.type}-icons.svg#${props.name}`);
        const iconSize = computed(() => props.size ? { width: props.size, height: props.size } : null);

        return { iconHref, iconSize };
    }
});
</script>

<style scoped>
.ml-icon {
    line-height: 1;
}
</style>
