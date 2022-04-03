import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersRepositoryModule } from '../users-repository.module';
import { PublicUrlService } from '../../core/public-url.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthMiddleware } from './auth.middleware';

@Module({
    imports: [
        UsersRepositoryModule,
        JwtModule.register({
            secret: process.env.API_SECRET,
            signOptions: { expiresIn: '30d' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, PublicUrlService]
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AuthMiddleware).forRoutes('graphql');
    }
}
