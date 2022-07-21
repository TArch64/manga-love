<template>
    <div class="ml-library-folders">
        <LibraryFolder
            v-for="folder of folders"
            :key="folder.id"
            :folder="folder"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import LibraryFolder from './library-folder.vue';

export default defineComponent({
    name: 'LibraryFolders',

    components: {
        LibraryFolder
    },

    setup() {
        const libraryStore = useLibraryStore();

        return { folders: libraryStore.folders };
    }
});
</script>

<style scoped>
.ml-library-folders {
    display: grid;
    gap: 15px;
}

@media (min-width: 992px) {

    .ml-library-folders {
        grid-template-columns: repeat(auto-fill, 400px);
        justify-content: space-evenly;
    }
}

@media (max-width: 991px) {

    .ml-library-folders {
        grid-template-columns: 1fr;
    }
}
</style>
