<template>
    <MlLayoutContent class="ml-library-folder">
        <MlLibraryFolderHeading />
    </MlLayoutContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlLayoutContent } from '~/components/common/layout';
import { MlLibraryFolderHeading } from '~/components/library/single';

export default defineComponent({
    // eslint-disable-next-line vue/match-component-file-name
    name: 'Id',

    components: {
        MlLibraryFolderHeading,
        MlLayoutContent
    },

    transition(to) {
        const isFolder = to.name === 'library-id';
        const name = isFolder ? 'in' : 'out';
        const inTiming = isFolder ? 'enter' : 'leave';
        const outTiming = isFolder ? 'leave' : 'enter';

        return {
            mode: 'out-in',
            name: `ml-transition-submenu-${name}`,
            duration: { [inTiming]: 150, [outTiming]: 100 }
        };
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
