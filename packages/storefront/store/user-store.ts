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

export interface SignUpInfo extends SignInCredentials {
    username: string;
}

export interface ForgotInfo {
    email: string;
}

export interface ResetPasswordInfo {
    password: string;
}

interface State {
    currentUser: User | null;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(info: SignUpInfo): Promise<void>;
    askResetPassword(info: ForgotInfo): Promise<void>;
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

        async signIn(credentials) {
            await useBrowserFetch<SignInCredentials>('/api/auth/sign-in', {
                email: credentials.email,
                password: credentials.password
            });
            await this.loadCurrentUser();
        },

        async signUp(info: SignUpInfo) {
            await useBrowserFetch<SignUpInfo>('/api/auth/sign-up', {
                username: info.username,
                email: info.email,
                password: info.password
            });
            await this.loadCurrentUser();
        },

        async askResetPassword(info: ForgotInfo) {
            await useBrowserFetch<ForgotInfo>('/api/auth/ask-reset-password', {
                email: info.email
            });
        }
    }
});
