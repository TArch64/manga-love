<template>
    <div class="ml-library-folder">
        <header class="ml-library-folder__header">
            <MlButton class="ml-library-folder__back" link="/library">
                <MlIcon name="back" size="20px" />
            </MlButton>

            <h2 class="ml-library-folder__title">
                {{ folder.name }}
            </h2>
        </header>
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useLibraryStore } from '~/store';
import { MlButton, MlIcon } from '~/components/common';

export default defineComponent({
    // eslint-disable-next-line vue/match-component-file-name
    name: 'Id',

    components: {
        MlButton,
        MlIcon
    },

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

<style scoped>
.ml-library-folder {
    padding-top: 35px;
}

.ml-library-folder__header {
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;

    &::after {
        content: "";
        display: block;
        width: 30px;
    }
}

.ml-library-folder__back {
    padding: 5px;
    border-radius: 3px;
    transition: background-color 0.1s ease-out;
    will-change: background-color;
    --icon-foreground: #242424;

    &:hover,
    &:focus {
        background-color: rgb(36, 36, 36, 0.1);
    }
}

.ml-library-folder__title {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #242424;
    margin: 0;
}
</style>
