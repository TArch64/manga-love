import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PublicUrlService } from '../../core/public-url.service';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';

declare module 'express' {
    export interface Request {
        user: CurrentUser;
    }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly publicUrl: PublicUrlService,
        private readonly authService: AuthService
    ) {}

    public async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.user = await this.authService.decodeToken(req.signedCookies.auth);

        if (!req.user) {
            const url = this.publicUrl.resolve('auth/sign-in', {
                return: this.publicUrl.resolve(req.originalUrl.replace(/^\//, ''))
            });
            res.redirect(url);
            return;
        }

        next();
    }
}
