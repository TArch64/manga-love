<template>
    <nuxt-link class="ml-library-folders__item" :to="localePath(libraryUrl)">
        <div class="ml-library-folders__item-content">
            <h3 class="ml-library-folders__item-title">
                {{ folder.name }}
            </h3>

            <p class="ml-library-folders__item-manga-count">
                {{ $tc('library.list.mangaCount', folder.mangaCount) }}
            </p>
        </div>

        <MlIcon class="ml-library-folders__item-arrow" name="arrow" size="24px" />
    </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';
import { LibraryFolder } from '~/store';
import { MlIcon } from '~/components/common';

export default defineComponent({
    name: 'MlLibraryFolder',

    components: {
        MlIcon
    },

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
    display: flex;
    align-items: center;
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
        --arrow-offset: -5px;
        --arrow-scale: 1.05;
    }
}

.ml-library-folders__item-content {
    flex-grow: 1;
}

.ml-library-folders__item-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #242424;
    margin-top: 0;
    margin-bottom: 5px;
}

.ml-library-folders__item-arrow {
    transform: rotate(180deg) translateX(var(--arrow-offset, 0)) scale(var(--arrow-scale, 1));
    transition: transform 0.1s ease-out;
    will-change: transform;
    --icon-foreground: currentColor;
}

.ml-library-folders__item-manga-count {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #808080;
    margin: 0;
}
</style>
