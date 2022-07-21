<template>
    <div class="ml-library">
        <LibraryFolders />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { LibraryFolders } from '~/components/library';

export default defineComponent({
    name: 'Library',

    components: {
        LibraryFolders
    },

    async middleware() {
        const libraryStore = useLibraryStore();
        await libraryStore.loadFolders();
    }
});
</script>

<style scoped>
.ml-library {
    padding: 45px 20px;
}
</style>
