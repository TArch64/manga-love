import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {UsersRepositoryModule} from "../users-repository.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthMiddleware} from "./auth.middleware";
import {PublicUrlService} from "../../core/public-url.service";

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
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes('graphql');
    }
}
