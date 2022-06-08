import { defineStore } from 'pinia';
import { useQuery, useApiHttp } from '~/composables';
import { currentUserQuery } from '~/graphql/user';

export interface User {
    id: string;
    email: string;
}

export interface GoogleCredentials {
    credential: string;
}

export interface GoogleSignInResponse {
    isNewUser: boolean;
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

interface ResetPasswordRequest extends ResetPasswordInfo {
    code: string;
}

export interface ResetPasswordState {
    isValid: boolean;
    code: string;
}

interface State {
    currentUser: User | null;
    resetPasswordState: ResetPasswordState | null;
}

interface Actions {
    loadCurrentUser(): Promise<void>;
    signIn(credentials: SignInCredentials): Promise<void>;
    signInByGoogle(credentials: GoogleCredentials): Promise<void>;
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

        async signInByGoogle(credentials) {
            await apiHttp.post<GoogleCredentials>('auth/google-sign-in', credentials);
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
            this.resetPasswordState.code = code;
        },

        async resetPassword(info: ResetPasswordInfo) {
            await apiHttp.post<ResetPasswordRequest>('auth/reset-password', {
                password: info.password,
                code: this.resetPasswordState?.code || ''
            });
        }
    }
});
