import { defineStore } from 'pinia';
import { useQuery, useBrowserFetch } from '~/composables';
import { currentUserQuery } from '~/graphql/user';

export interface User {
    id: string;
    email: string;
}

export interface SignInCredentials {
    email: string;
    password: string;
}

interface State {
    currentUser: User | null;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
    signIn(credentials: SignInCredentials): Promise<void>;
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
        },

        async signIn(credentials: SignInCredentials) {
            await useBrowserFetch('/api/auth/sign-in', credentials);
            await this.loadCurrentUser();
            this.$nuxt.redirect('/');
        }
    }
});
