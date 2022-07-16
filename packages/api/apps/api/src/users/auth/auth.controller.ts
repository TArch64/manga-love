import { Body, Controller, Get, Inject, Post, Query, Render, Res } from '@nestjs/common';
import { IsEmail, IsJWT, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Response } from 'express';
import { PublicUrlService } from '@manga-love/core';
import { AuthStrategy } from './auth.strategy';
import { PasswordResetService, ResetPasswordState } from './password-reset.service';
import { SignUpService } from './sign-up.service';
import { SignInService } from './sign-in.service';
import { EmailVerificationService, EmailVerificationState } from './email-verification.service';

class SignInBody {
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;
}

class GoogleCredentialsBody {
    @IsNotEmpty()
    @IsJWT()
    public credential: string;
}

interface SignInRender {
    actionPath: string;
    error?: string;
}

class SignUpBody {
    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public password: string;
}

class AskResetPasswordBody {
    @IsEmail()
    public email: string;
}

class ResetPasswordBody {
    @IsNotEmpty()
    @IsString()
    public password: string;

    @IsUUID()
    public code: string;
}

class VerifyEmailBody {
    @IsUUID()
    public code: string;
}

interface SuccessResponse {
    success: true;
}

@Controller('auth')
export class AuthController {
    constructor(
        private readonly signInService: SignInService,
        private readonly signUpService: SignUpService,
        private readonly passwordResetService: PasswordResetService,
        private readonly emailVerificationService: EmailVerificationService,
        @Inject(PublicUrlService.API)
        private readonly apiUrl: PublicUrlService
    ) {}

    @Get('sign-in')
    @Render('auth-sign-in.ejs')
    public signInPage(
        @Query('return') returnUrl?: string,
        @Query('error') error?: string
    ): SignInRender {
        return {
            actionPath: this.apiUrl.resolve('auth/sign-in', {
                return: returnUrl ?? this.apiUrl.resolve('graphql')
            }),
            error
        };
    }

    @Post('sign-in')
    public async signIn(
        @Body() body: SignInBody,
        @Query('return') returnUrl: string,
        @Res() res: Response
    ): Promise<void> {
        try {
            const token = await this.signInService.signIn(body.email, body.password);
            this.writeAuthCookie(res, token);

            returnUrl ? res.redirect(returnUrl) : res.json({ success: true });
        } catch (error) {
            if (!returnUrl) throw error;

            const url = this.apiUrl.resolve('auth/sign-in', {
                return: returnUrl,
                error: error.message
            });
            res.redirect(url);
        }
    }

    private writeAuthCookie(response: Response, token: string): void {
        response.cookie(AuthStrategy.COOKIE, token, {
            signed: true,
            secure: true,
            httpOnly: true
        });
    }

    @Post('sign-up')
    public async signUp(
        @Body() body: SignUpBody,
        @Res({ passthrough: true }) res: Response
    ): Promise<SuccessResponse> {
        const token = await this.signUpService.signUp(body);
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Post('ask-reset-password')
    public async askResetPassword(@Body() body: AskResetPasswordBody): Promise<SuccessResponse> {
        await this.passwordResetService.askResetPassword(body.email);
        return { success: true };
    }

    @Get('reset-password')
    public resetPasswordState(@Query('code') code: string): Promise<ResetPasswordState> {
        return this.passwordResetService.getResetPasswordState(code);
    }

    @Post('reset-password')
    public async resetPassword(
        @Body() body: ResetPasswordBody,
        @Res({ passthrough: true }) res: Response
    ): Promise<SuccessResponse> {
        const token = await this.passwordResetService.resetPassword(body.code, body.password);
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Post('google-sign-in')
    public async googleSignIn(
        @Body() body: GoogleCredentialsBody,
        @Res({ passthrough: true }) res: Response
    ): Promise<SuccessResponse> {
        const token = await this.signInService.googleSignIn(body.credential);
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Get('email-verification')
    public emailVerificationState(@Query('code') code: string): Promise<EmailVerificationState> {
        return this.emailVerificationService.getVerificationState(code);
    }

    @Post('email-verification')
    public async verifyEmail(@Body() body: VerifyEmailBody): Promise<SuccessResponse> {
        await this.emailVerificationService.verifyEmail(body.code);
        return { success: true };
    }
}
