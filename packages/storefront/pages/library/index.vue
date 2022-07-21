<template>
    <div class="ml-library">
        <MlLibraryFolders />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLibraryFolders } from '~/components/library/list';

export default defineComponent({
    name: 'Index',

    components: {
        MlLibraryFolders
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
