<template>
    <Icon name="logo" :class="iconClasses" :size="size" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import Icon from './icon.vue';

export enum AppLogoTypes {
    OUTLINED = 'outlined',
    SOLID = 'solid'
}

export default defineComponent({
    name: 'AppLogo',

    components: {
        Icon
    },

    props: {
        type: {
            type: String as PropType<AppLogoTypes>,
            required: true
        },

        size: Icon.props!.size
    },

    setup(props) {
        const iconClasses = computed(() => `ml-logo--${props.type}`);

        return { iconClasses };
    }
});
</script>

<style scoped>
.ml-logo--outlined {
    --icon-background: transparent;
    --icon-foreground: #242424;
    --icon-border: #242424;
}

.ml-logo--solid {
    --icon-background: #F5F5F5;
    --icon-foreground: #242424;
}
</style>
