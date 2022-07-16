import { Body, Controller, Get, Inject, Post, Query, Render, Res } from '@nestjs/common';
import { IsEmail, IsJWT, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Response } from 'express';
import { PublicUrlService, SuccessResponse } from '@manga-love/core';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { MICROSERVICES } from '../../microservices.config';
import { AuthStrategy } from './auth.strategy';

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

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(MICROSERVICES.AUTH)
        private readonly authService: ClientProxy,
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
            const token = await firstValueFrom<string>(this.authService.send('sign-in', body));
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
        const token = await firstValueFrom<string>(this.authService.send('sign-up', body));
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Post('ask-reset-password')
    public askResetPassword(@Body() body: AskResetPasswordBody): Observable<SuccessResponse> {
        return this.authService.send('ask-reset-password', body.email);
    }

    @Get('reset-password')
    public resetPasswordState(@Query('code') code: string): Observable<object> {
        return this.authService.send('reset-password-state', code);
    }

    @Post('reset-password')
    public async resetPassword(
        @Body() body: ResetPasswordBody,
        @Res({ passthrough: true }) res: Response
    ): Promise<SuccessResponse> {
        const token = await firstValueFrom(this.authService.send('reset-password', body));
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Post('google-sign-in')
    public async googleSignIn(
        @Body() body: GoogleCredentialsBody,
        @Res({ passthrough: true }) res: Response
    ): Promise<SuccessResponse> {
        const token = await firstValueFrom<string>(this.authService.send('google-sign-in', body.credential));
        this.writeAuthCookie(res, token);
        return { success: true };
    }

    @Get('email-verification')
    public emailVerificationState(@Query('code') code: string): Observable<object> {
        return this.authService.send('email-verification', code);
    }

    @Post('email-verification')
    public async verifyEmail(@Body() body: VerifyEmailBody): Promise<SuccessResponse> {
        await firstValueFrom(this.authService.send('verify-email', (body.code)));
        return { success: true };
    }
}
