<template>
    <div class="ml-library-folder">
        <MlLibraryFolderHeading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLibraryFolderHeading } from '~/components/library/single';

export default defineComponent({
    // eslint-disable-next-line vue/match-component-file-name
    name: 'Id',

    components: {
        MlLibraryFolderHeading
    },

    async middleware({ route }) {
        const libraryStore = useLibraryStore();
        await libraryStore.loadFolder(route.params.id);
    }
});
</script>

<style scoped>
.ml-library-folder {
    padding-top: 35px;
}
</style>
