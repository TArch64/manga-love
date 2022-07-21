<template>
    <header class="ml-library-folder__header">
        <MlButtonBack link="/library" />

        <h2 class="ml-library-folder__title">
            {{ folder.name }}
        </h2>
    </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlButtonBack } from '~/components/common';

export default defineComponent({
    name: 'MlLibraryFolderHeader',

    components: {
        MlButtonBack
    },

    setup() {
        const libraryStore = useLibraryStore();

        return { folder: libraryStore.activeFolder };
    }
});
</script>

<style scoped>
.ml-library-folder__header {
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;

    &::after {
        content: "";
        display: block;
        width: 30px;
    }
}

.ml-library-folder__title {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #242424;
    margin: 0;
}
</style>
