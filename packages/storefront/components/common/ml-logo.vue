<template>
    <MlIcon name="logo" :class="iconClasses" :size="size" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import MlIcon from './ml-icon.vue';

export enum AppLogoSkin {
    OUTLINED = 'outlined',
    SOLID = 'solid'
}

export default defineComponent({
    name: 'MlLogo',

    components: {
        MlIcon
    },

    props: {
        skin: {
            type: String as PropType<AppLogoSkin>,
            required: true
        },

        size: MlIcon.props!.size
    },

    setup(props) {
        const iconClasses = computed(() => `ml-logo--${props.skin}`);

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
