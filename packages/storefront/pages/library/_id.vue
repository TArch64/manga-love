<template>
    <MlLayoutSubpage :title="folder.name" back-link="/library" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLayoutSubpage, navigationSubpageTransition } from '~/components/common/layout';

export default defineComponent({
    // eslint-disable-next-line vue/match-component-file-name
    name: 'Id',

    components: {
        MlLayoutSubpage
    },

    transition: navigationSubpageTransition(['library-id']),

    async middleware({ route }) {
        const libraryStore = useLibraryStore();
        await libraryStore.loadFolder(route.params.id);
    },

    setup() {
        const libraryStore = useLibraryStore();

        return { folder: libraryStore.activeFolder };
    }
});
</script>
