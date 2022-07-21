<template>
    <ul>
        <li v-for="folder of folders" :key="folder.id">
            {{ folder.name }}
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';

export default defineComponent({
    name: 'LibraryFolders',

    setup() {
        const libraryStore = useLibraryStore();

        return { folders: libraryStore.folders };
    }
});
</script>
