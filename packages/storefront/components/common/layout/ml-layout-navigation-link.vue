<template>
    <nuxt-link
        class="ml-layout-navigation__link"
        exact-active-class="ml-layout-navigation__link--active"
        :to="url"
        :title="title"
    >
        <MlIcon :name="icon" size="24px" />
    </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';
import { MlIcon } from '~/components/common';
import { useTranslate } from '~/composables';

export default defineComponent({
    name: 'MlLayoutNavigationLink',

    components: {
        MlIcon
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

        const icon = computed(() => {
            const state = props.active ? 'active' : 'inactive';
            return `navigation-link-${props.id}-${state}`;
        });

        return { title, icon };
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
