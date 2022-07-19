import { Module } from '@nestjs/common';
import { UsersDatabaseModule } from '@manga-love/database';
import { PublicUrlService } from '@manga-love/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers';
import { MicroservicesModule } from './microservices.config';
import {
    SignUpService,
    SignInService,
    EmailVerificationService,
    AuthTokenService,
    AuthPasswordService,
    PasswordResetService
} from './services';

@Module({
    imports: [
        UsersDatabaseModule,
        MicroservicesModule,
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '30d' }
        })
    ],
    controllers: [
        AuthController
    ],
    providers: [
        SignUpService,
        SignInService,
        EmailVerificationService,
        AuthTokenService,
        AuthPasswordService,
        PasswordResetService,
        PublicUrlService.provide(PublicUrlService.API, process.env.API_PUBLIC_URL),
        PublicUrlService.provide(PublicUrlService.STOREFRONT, process.env.API_STOREFRONT_URL),
        PublicUrlService.provide(PublicUrlService.CDN, process.env.API_CLOUDFRONT_URL)
    ]
})
export class AuthModule {}
