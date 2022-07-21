<template>
    <nuxt-link custom :exact="exact" :to="localePath(url)">
        <template #default="{ isActive, href, navigate }">
            <a
                class="ml-layout-navigation__link"
                :class="{ 'ml-layout-navigation__link--active': isActive }"
                :href="href"
                :title="title"
                @click="navigate"
            >
                <MlFadeTransition duration="150">
                    <MlIcon :name="activeIcon" size="24px" key="active-icon" v-if="isActive" />
                    <MlIcon :name="inactiveIcon" size="24px" key="inactive-icon" v-else />
                </MlFadeTransition>
            </a>
        </template>
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

        exact: {
            type: Boolean,
            required: false,
            default: false
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
    color: #999;
    transition: color 0.1s ease-out;
    will-change: color;
    -webkit-tap-highlight-color: transparent;
    --icon-foreground: currentColor;

    &:hover,
    &:focus {
        cursor: pointer;
        outline: none;
        color: #242424;
    }
}

.ml-layout-navigation__link--active {
    cursor: default !important;
    color: #242424;
}
</style>
