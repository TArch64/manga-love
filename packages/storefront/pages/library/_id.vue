<template>
    <div>Active folder {{ folder.name }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';

export default defineComponent({
    // eslint-disable-next-line vue/match-component-file-name
    name: 'Id',

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
