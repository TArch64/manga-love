import {Injectable, NestMiddleware} from '@nestjs/common';
import {NextFunction, Request, Response} from 'express';
import {PublicUrlService} from "../../core/public-url.service";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(
        private readonly publicUrl: PublicUrlService,
        private readonly authService: AuthService
    ) {}

    async use(req: Request, res: Response, next: NextFunction) {
        req['user'] = await this.authService.decodeToken(req.signedCookies.auth);

        if (!req['user']) {
            const url = this.publicUrl.resolve('auth/sign-in', {
                return: this.publicUrl.resolve(req.originalUrl.replace(/^\//, ''))
            })
            res.redirect(url);
            return;
        }

        next();
    }
}
