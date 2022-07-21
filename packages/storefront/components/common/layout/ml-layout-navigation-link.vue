<template>
    <nuxt-link
        class="ml-layout-navigation__link"
        exact-active-class="ml-layout-navigation__link--active"
        :to="url"
        :title="title"
    >
        <MlFadeTransition duration="150">
            <MlIcon :name="activeIcon" size="24px" key="active-icon" v-if="active" />
            <MlIcon :name="inactiveIcon" size="24px" key="inactive-icon" v-else />
        </MlFadeTransition>
    </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { MlIcon } from '~/components/common';
import { useTranslate } from '~/composables';
import { MlFadeTransition } from '../transitions';

export default defineComponent({
    name: 'MlLayoutNavigationLink',

    components: {
        MlIcon,
        MlFadeTransition
    },

    props: {
        id: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        },

        active: {
            type: Boolean,
            required: true
        }
    },

    setup(props) {
        const i18n = useTranslate();
        const title = computed(() => i18n.get(`layout.navigation.links.${props.id}`));
        const inactiveIcon = computed(() => `navigation-link-${props.id}-inactive`);
        const activeIcon = computed(() => `navigation-link-${props.id}-active`);

        return { title, inactiveIcon, activeIcon };
    }
});
</script>

<style scoped>
.ml-layout-navigation__link {
    padding: 10px;
    display: flex;
    -webkit-tap-highlight-color: transparent;
    --icon-foreground: #999;

    &:hover,
    &:focus {
        cursor: pointer;
        outline: none;
        --icon-foreground: #242424;
    }
}

.ml-layout-navigation__link--active {
    cursor: default !important;
    --icon-foreground: #242424;
}
</style>
