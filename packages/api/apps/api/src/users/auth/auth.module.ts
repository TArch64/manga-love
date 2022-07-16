import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PublicUrlService } from '@manga-love/core';
import { UsersRepositoryModule } from '../repository';
import { AuthController } from './auth.controller';
import { AuthStrategy } from './auth.strategy';

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
        PublicUrlService.provide(PublicUrlService.API, process.env.API_PUBLIC_URL),
        PublicUrlService.provide(PublicUrlService.STOREFRONT, process.env.API_STOREFRONT_URL),
        AuthStrategy
    ]
})
export class AuthModule {}
