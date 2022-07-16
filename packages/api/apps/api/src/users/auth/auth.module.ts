import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PublicUrlService } from '@manga-love/core';
import { UsersRepositoryModule } from '../repository';
import { AuthController } from './auth.controller';
import { AuthStrategy } from './auth.strategy';
import { AuthPasswordService } from './auth-password.service';
import { PasswordResetService } from './password-reset.service';
import { AuthTokenService } from './auth-token.service';
import { SignUpService } from './sign-up.service';
import { SignInService } from './sign-in.service';
import { EmailVerificationService } from './email-verification.service';

@Module({
    imports: [
        PassportModule,
        UsersRepositoryModule,
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '30d' }
        })
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthPasswordService,
        PasswordResetService,
        AuthTokenService,
        SignInService,
        SignUpService,
        EmailVerificationService,
        PublicUrlService.provide(PublicUrlService.API, process.env.API_PUBLIC_URL),
        PublicUrlService.provide(PublicUrlService.STOREFRONT, process.env.API_STOREFRONT_URL),
        AuthStrategy
    ]
})
export class AuthModule {}
