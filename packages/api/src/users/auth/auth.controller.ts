import { Body, Controller, Get, Post, Query, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { PublicUrlService } from '../../core';
import { AuthService } from './auth.service';

interface SignInBody {
    email: string;
    password: string;
}

interface SignInRender {
    actionPath: string;
    error?: string;
}

interface SignUpBody {
    username: string;
    email: string;
    password: string;
}

interface SuccessResponse {
    success: true
}

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly publicUrl: PublicUrlService
    ) {}

    @Get('sign-in')
    @Render('auth-sign-in.ejs')
    public signInPage(
        @Query('return') returnUrl?: string,
        @Query('error') error?: string
    ): SignInRender {
        return {
            actionPath: this.publicUrl.resolve('auth/sign-in', {
                return: returnUrl ?? this.publicUrl.resolve('graphql')
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
            const token = await this.authService.signIn(body.email, body.password);
            this.writeAuthCookie(res, token);

            returnUrl ? res.redirect(returnUrl) : res.json({ success: true });
        } catch (error) {
            if (!returnUrl) throw error;

            const url = this.publicUrl.resolve('auth/sign-in', {
                return: returnUrl,
                error: error.message
            });
            res.redirect(url);
        }
    }

    private writeAuthCookie(response: Response, token: string): void {
        response.cookie('auth', token, {
            signed: true,
            secure: true,
            httpOnly: true
        });
    }

    @Post('sign-up')
    public async signUp(
        @Body() body: SignUpBody,
        @Res({ passthrough: true }
    ) res: Response): Promise<SuccessResponse> {
        const token = await this.authService.signUp(body);
        this.writeAuthCookie(res, token);
        return { success: true };
    }
}
