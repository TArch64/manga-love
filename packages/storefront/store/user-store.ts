import { defineStore } from 'pinia';
import { useQuery } from '~/composables';
import { currentUserQuery } from '~/graphql/user';

export interface User {
    id: string;
    email: string;
}

interface State {
    currentUser: User | null;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
}

export const useUserStore = defineStore<string, State, {}, Actions>('user', {
    state: () => ({
        currentUser: null
    }),

    actions: {
        async loadCurrentUser() {
            try {
                const query = await useQuery<{ currentUser: User }>({ query: currentUserQuery });
                this.currentUser = query.currentUser;
            } catch (error) {
                this.currentUser = null;
            }
        }
    }
});
