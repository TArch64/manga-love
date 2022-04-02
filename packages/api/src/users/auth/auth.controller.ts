import {Controller, Post, Res, Body, Get, Render, Query} from '@nestjs/common';
import {Response} from 'express';
import {AuthService} from "./auth.service";
import {PublicUrlService} from "../../core/public-url.service";

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
    signInPage(
        @Query('return') returnUrl?: string,
        @Query('error') error?: string
    ): SignInRender {
        return {
            actionPath: this.publicUrl.resolve('auth/sign-in', {return: returnUrl}),
            error
        }
    }

    @Post('sign-in')
    async signIn(
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

            if (returnUrl) res.redirect(returnUrl)
        } catch (error) {
            if (!returnUrl) throw error;

            const url = this.publicUrl.resolve('auth/sign-in', {
                return: returnUrl,
                error: error.message
            })
            res.redirect(url);
        }
    }
}
