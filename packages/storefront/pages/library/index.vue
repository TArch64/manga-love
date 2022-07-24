<template>
    <MlLayoutContent class="ml-library">
        <MlLibraryFolders />
    </MlLayoutContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLayoutContent, navigationPageTransition } from '~/components/common/layout';
import { MlLibraryFolders } from '~/components/library/list';

export default defineComponent({
    name: 'Index',

    components: {
        MlLibraryFolders,
        MlLayoutContent
    },

    transition: navigationPageTransition(['library-id']),

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
