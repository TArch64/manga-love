import { defineStore } from 'pinia';
import { LibraryFoldersQuery, LibraryFolderByIdQuery } from '~/graphql/library';

export interface LibraryFolder {
    id: string;
    name: string;
}

interface State {
    folders: LibraryFolder[];
    activeFolder: LibraryFolder | null;
}

export const useLibraryStore = defineStore('library', {
    state: (): State => ({
        folders: [],
        activeFolder: null
    }),

    actions: {
        async loadFolders(): Promise<void> {
            type Result = {
                library: { folders: LibraryFolder[] };
            };
            const result = await this.$nuxt.$apollo.query<Result>(LibraryFoldersQuery);
            this.folders = result.library.folders;
        },

        async loadFolder(id: string): Promise<void> {
            type Result = {
                library: { folder: LibraryFolder };
            };
            const result = await this.$nuxt.$apollo.query<Result>(LibraryFolderByIdQuery, {
                variables: { id }
            });
            this.activeFolder = result.library.folder;
        }
    }
});
