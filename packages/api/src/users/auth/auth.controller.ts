import { Body, Controller, Get, Post, Query, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { PublicUrlService } from '../../core';
import { AuthService } from './auth.service';

type SignInBody = {
    email: string;
    password: string;
};

type SignInRender = {
    actionPath: string;
    error?: string;
};

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

            res.cookie('auth', token, {
                signed: true,
                secure: true,
                httpOnly: true
            });

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
}
