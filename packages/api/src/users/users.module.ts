import {Module} from "@nestjs/common";
import {UsersResolver} from "./users.resolver";
import {PrismaService} from "../prisma";
import {UsersRepository} from "./users.repository";

@Module({
    providers: [
        PrismaService,
        UsersResolver,
        UsersRepository
    ]
})
export class UsersModule {}
