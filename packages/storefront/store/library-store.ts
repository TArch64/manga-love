import { defineStore } from 'pinia';
import { LibraryFoldersQuery } from '~/graphql/library';

export interface LibraryFolder {
    id: string;
    name: string;
}

interface State {
    folders: LibraryFolder[];
}

export const useLibraryStore = defineStore('library', {
    state: (): State => ({
        folders: []
    }),

    actions: {
        async loadFolders(): Promise<void> {
            type Result = {
                library: { folders: LibraryFolder[] };
            };
            const result = await this.$nuxt.$apollo.query<Result>(LibraryFoldersQuery);
            this.folders = result.library.folders;
        }
    }
});
