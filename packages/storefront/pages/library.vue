<template>
    <div class="ml-library">
        <ul>
            <li v-for="folder of folders" :key="folder.id">
                {{ folder.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';

export default defineComponent({
    name: 'Library',

    setup() {
        const libraryStore = useLibraryStore();

        const folders = useAsync(async () => {
            await libraryStore.loadFolders();
            return libraryStore.folders;
        });

        return { folders };
    }
});
</script>

<style scoped>
.ml-library {
    padding: 45px 20px;
}
</style>
