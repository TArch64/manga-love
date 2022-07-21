<template>
    <nuxt-link class="ml-library-folders__item" :to="localePath(libraryUrl)">
        {{ folder.name }}
    </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { LibraryFolder } from '~/store';

export default defineComponent({
    name: 'LibraryFolder',

    props: {
        folder: {
            type: Object as PropType<LibraryFolder>,
            required: true
        }
    },

    setup(props) {
        const libraryUrl = computed(() => `/library/${props.folder.id}`);

        return { libraryUrl };
    }
});
</script>

<style scoped>
.ml-library-folders__item {
    display: block;
    padding: 15px 20px;
    box-shadow: 0 7px 40px rgba(138, 149, 158, 0.2);
    color: inherit;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;

    &:hover,
    &:focus,
    &:active {
        color: inherit;
        cursor: pointer;
        outline: none;
    }
}
</style>
