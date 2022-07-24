<template>
    <MlLayoutPage title="Library">
        <MlLibraryFolders />
    </MlLayoutPage>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLayoutPage, navigationPageTransition } from '~/components/common/layout';
import { MlLibraryFolders } from '~/components/library/list';

export default defineComponent({
    name: 'Index',

    components: {
        MlLibraryFolders,
        MlLayoutPage
    },

    transition: navigationPageTransition(['library-id']),

    async middleware() {
        const libraryStore = useLibraryStore();
        await libraryStore.loadFolders();
    }
});
</script>
