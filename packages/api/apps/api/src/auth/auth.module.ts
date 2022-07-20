import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PublicUrlService } from '@manga-love/core';
import { UsersDatabaseModule } from '@manga-love/database';
import { AuthStrategy } from './auth.strategy';
import { AuthResolver } from './auth.resolver';

@Module({
    imports: [
        PassportModule,
        UsersDatabaseModule,
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '30d' }
        })
    ],
    providers: [
        PublicUrlService.provide(PublicUrlService.API, process.env.API_PUBLIC_URL),
        PublicUrlService.provide(PublicUrlService.STOREFRONT, process.env.API_STOREFRONT_URL),
        AuthStrategy,
        AuthResolver
    ]
})
export class AuthModule {}
