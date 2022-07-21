import { defineStore } from 'pinia';
import {
    AskResetPassword, CurrentUserQuery,
    EmailVerificationStateQuery,
    GoogleSignInMutation,
    ResetPasswordMutation,
    ResetPasswordStateQuery,
    SignInMutation,
    SignUpMutation,
    VerifyEmailMutation
} from '~/graphql/user';
import { LANGUAGE_CODE } from '~/utils';

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

export interface ResetPasswordState {
    isValid: boolean;
    username: string;
    code: string;
}

export interface EmailVerificationState {
    isValid: boolean;
    username: string;
    code: string;
}

export interface UserAvatar {
    originalHeight: number;
    originalWidth: number;
    originalSrc: string;
}

export interface User {
    id: string;
    username: string;
    avatar: UserAvatar;
}

interface State {
    currentUser: User | null;
    isCurrentUserLoaded: boolean;
    resetPasswordState: ResetPasswordState | null;
    emailVerificationState: EmailVerificationState | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        currentUser: null,
        isCurrentUserLoaded: false,
        resetPasswordState: null,
        emailVerificationState: null
    }),

    actions: {
        async signIn(credentials: SignInCredentials) {
            await this.$nuxt.$apollo.mutate(SignInMutation, { variables: credentials });
            this.isCurrentUserLoaded = false;
        },

        async signInByGoogle(credentials: GoogleCredentials) {
            await this.$nuxt.$apollo.mutate(GoogleSignInMutation, {
                variables: { ...credentials, language: LANGUAGE_CODE }
            });
            this.isCurrentUserLoaded = false;
        },

        async signUp(info: SignUpInfo) {
            await this.$nuxt.$apollo.mutate(SignUpMutation, {
                variables: { ...info, language: LANGUAGE_CODE }
            });
            this.isCurrentUserLoaded = false;
        },

        async askResetPassword(info: ForgotInfo) {
            await this.$nuxt.$apollo.mutate(AskResetPassword, { variables: info });
        },

        async loadResetPasswordState(code: string) {
            type Result = { resetPasswordState: ResetPasswordState };
            const result = await this.$nuxt.$apollo.query<Result>(ResetPasswordStateQuery, { variables: { code } });

            this.resetPasswordState = result.resetPasswordState;
            this.resetPasswordState.code = code;
        },

        async resetPassword(info: ResetPasswordInfo) {
            await this.$nuxt.$apollo.mutate(ResetPasswordMutation, {
                variables: {
                    password: info.password,
                    code: this.resetPasswordState?.code || ''
                }
            });
        },

        async loadEmailVerificationState(code: string) {
            type Result = { emailVerificationState: EmailVerificationState };
            const result = await this.$nuxt.$apollo.query<Result>(EmailVerificationStateQuery, { variables: { code } });

            this.emailVerificationState = result.emailVerificationState;
            this.emailVerificationState.code = code;
        },

        async verifyEmail() {
            await this.$nuxt.$apollo.mutate(VerifyEmailMutation, {
                variables: { code: this.emailVerificationState?.code ?? '' }
            });
        },

        async loadCurrentUser(): Promise<void> {
            try {
                type Result = { currentUser: User };
                const result = await this.$nuxt.$apollo.query<Result>(CurrentUserQuery);
                this.currentUser = result.currentUser;
            } catch (error) {
                this.currentUser = null;
            } finally {
                this.isCurrentUserLoaded = true;
            }
        }
    }
});
