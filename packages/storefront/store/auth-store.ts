import { defineStore } from 'pinia';
import {
    AskResetPassword,
    EmailVerificationStateQuery,
    GoogleSignInMutation,
    ResetPasswordMutation,
    ResetPasswordStateQuery,
    SignInMutation,
    SignUpMutation,
    VerifyEmailMutation
} from '~/graphql/user';

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

interface State {
    resetPasswordState: ResetPasswordState | null;
    emailVerificationState: EmailVerificationState | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        resetPasswordState: null,
        emailVerificationState: null
    }),

    actions: {
        async signIn(credentials: SignInCredentials) {
            await this.$nuxt.$apollo.mutate({
                mutation: SignInMutation,
                variables: credentials
            });
        },

        async signInByGoogle(credentials: GoogleCredentials) {
            await this.$nuxt.$apollo.mutate({
                mutation: GoogleSignInMutation,
                variables: credentials
            });
        },

        async signUp(info: SignUpInfo) {
            await this.$nuxt.$apollo.mutate({
                mutation: SignUpMutation,
                variables: info
            });
        },

        async askResetPassword(info: ForgotInfo) {
            await this.$nuxt.$apollo.mutate({
                mutation: AskResetPassword,
                variables: { email: info.email }
            });
        },

        async loadResetPasswordState(code: string) {
            const result = await this.$nuxt.$apollo.query<{ resetPasswordState: ResetPasswordState }>({
                query: ResetPasswordStateQuery,
                variables: { code }
            });

            this.resetPasswordState = result.data.resetPasswordState;
            this.resetPasswordState.code = code;
        },

        async resetPassword(info: ResetPasswordInfo) {
            await this.$nuxt.$apollo.mutate({
                mutation: ResetPasswordMutation,
                variables: {
                    password: info.password,
                    code: this.resetPasswordState?.code || ''
                }
            });
        },

        async loadEmailVerificationState(code: string) {
            const result = await this.$nuxt.$apollo.query<{ emailVerificationState: EmailVerificationState }>({
                query: EmailVerificationStateQuery,
                variables: { code }
            });

            this.emailVerificationState = result.data.emailVerificationState;
            this.emailVerificationState.code = code;
        },

        async verifyEmail() {
            await this.$nuxt.$apollo.mutate({
                mutation: VerifyEmailMutation,
                variables: { code: this.emailVerificationState?.code ?? '' }
            });
        }
    }
});
