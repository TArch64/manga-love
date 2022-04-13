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

interface State {
    currentUser: User | null;
    isResetCodeValid: boolean;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(info: SignUpInfo): Promise<void>;
    askResetPassword(info: ForgotInfo): Promise<void>;
    loadResetPasswordValidity(code: string): Promise<void>;
    resetPassword(info: ResetPasswordInfo): Promise<void>;
}

const apiHttp = useApiHttp();

export const useAuthStore = defineStore<string, State, {}, Actions>('auth', {
    state: () => ({
        currentUser: null,
        isResetCodeValid: false
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

        async loadResetPasswordValidity(code: string) {
            const response = await apiHttp.get<{ isValid: boolean }>('auth/reset-password', { code });
            this.isResetCodeValid = response.isValid;
        },

        async resetPassword(info: ResetPasswordInfo) {
            await apiHttp.post<ResetPasswordInfo>('auth/reset-password', {
                password: info.password
            });
        }
    }
});
