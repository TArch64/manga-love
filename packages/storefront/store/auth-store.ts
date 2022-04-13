import { defineStore } from 'pinia';
import { useQuery, useApiHttp } from '~/composables';
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

export interface ResetPasswordState {
    isValid: boolean;
}

interface State {
    currentUser: User | null;
    resetPasswordState: ResetPasswordState | null;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(info: SignUpInfo): Promise<void>;
    askResetPassword(info: ForgotInfo): Promise<void>;
    loadResetPasswordState(code: string): Promise<void>;
    resetPassword(info: ResetPasswordInfo): Promise<void>;
}

const apiHttp = useApiHttp();

export const useAuthStore = defineStore<string, State, {}, Actions>('auth', {
    state: () => ({
        currentUser: null,
        resetPasswordState: null
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
            await apiHttp.post<SignInCredentials>('auth/sign-in', {
                email: credentials.email,
                password: credentials.password
            });
        },

        async signUp(info: SignUpInfo) {
            await apiHttp.post<SignUpInfo>('auth/sign-up', {
                username: info.username,
                email: info.email,
                password: info.password
            });
        },

        async askResetPassword(info: ForgotInfo) {
            await apiHttp.post<ForgotInfo>('auth/ask-reset-password', {
                email: info.email
            });
        },

        async loadResetPasswordState(code: string) {
            this.resetPasswordState = await apiHttp.get<ResetPasswordState>('auth/reset-password', { code });
        },

        async resetPassword(info: ResetPasswordInfo) {
            await apiHttp.post<ResetPasswordInfo>('auth/reset-password', {
                password: info.password
            });
        }
    }
});
