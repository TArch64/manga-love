import {Module} from "@nestjs/common";
import {UsersRepository} from "./users.repository";
import {PrismaService} from "../prisma";

@Module({
    providers: [UsersRepository, PrismaService],
    exports: [UsersRepository]
})
export class UsersRepositoryModule {}
