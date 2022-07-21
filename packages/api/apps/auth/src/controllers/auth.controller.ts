import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Prisma } from '@manga-love/database';
import { Language, SuccessResponse } from '@manga-love/core';
import {
    SignUpService,
    SignInService,
    EmailVerificationState,
    EmailVerificationService,
    PasswordResetService,
    ResetPasswordState
} from '../services';

interface SignInPayload {
    email: string;
    password: string;
}

interface ResetPasswordPayload {
    password: string;
    code: string;
}

interface GoogleSignInPayload {
    credential: string;
    language: Language;
}

type SignUpPayload = Prisma.DatabaseUserCreateInput & { language: Language };

@Controller()
export class AuthController {
    constructor(
        private readonly signUpService: SignUpService,
        private readonly signInService: SignInService,
        private readonly emailVerification: EmailVerificationService,
        private readonly passwordResetService: PasswordResetService
    ) {}

    @MessagePattern('sign-up')
    public async signUp({ language, ...user }: SignUpPayload): Promise<string> {
        return this.signUpService.signUp(user, language);
    }

    @MessagePattern('email-verification')
    public async getEmailVerificationState(code: string): Promise<EmailVerificationState> {
        return this.emailVerification.getVerificationState(code);
    }

    @MessagePattern('verify-email')
    public async verifyEmail(code: string): Promise<SuccessResponse> {
        await this.emailVerification.verifyEmail(code);
        return { success: true };
    }

    @MessagePattern('sign-in')
    public async signIn(payload: SignInPayload): Promise<string> {
        return this.signInService.signIn(payload.email, payload.password);
    }

    @MessagePattern('google-sign-in')
    public async googleSignIn(payload: GoogleSignInPayload): Promise<string> {
        return this.signInService.googleSignIn(payload.credential, payload.language);
    }

    @MessagePattern('ask-reset-password')
    public async askResetPassword(email: string): Promise<SuccessResponse> {
        await this.passwordResetService.askResetPassword(email);
        return { success: true };
    }

    @MessagePattern('reset-password-state')
    public async getResetPassword(code: string): Promise<ResetPasswordState> {
        return this.passwordResetService.getResetPasswordState(code);
    }

    @MessagePattern('reset-password')
    public async resetPassword(payload: ResetPasswordPayload): Promise<string> {
        return this.passwordResetService.resetPassword(payload.code, payload.password);
    }
}
