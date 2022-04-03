import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersRepositoryModule } from '../users-repository.module';
import { PublicUrlService } from '../../core/public-url.service';
import { AuthService } from './auth.service';
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
    controllers: [AuthController],
    providers: [
        AuthService,
        PublicUrlService,
        AuthStrategy
    ]
})
export class AuthModule {}
