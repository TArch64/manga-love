import {Module} from "@nestjs/common";
import {UsersResolver} from "./users.resolver";
import {AuthModule} from "./auth";
import {UsersRepositoryModule} from "./users-repository.module";

@Module({
    imports: [
        AuthModule,
        UsersRepositoryModule
    ],
    providers: [UsersResolver]
})
export class UsersModule {}
