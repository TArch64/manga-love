import {Injectable} from "@nestjs/common";
import {DatabaseUser, PrismaService} from "../prisma";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUserById(id: string): Promise<DatabaseUser | undefined> {
        return this.prisma.databaseUser.findUnique({
            where: { id }
        })
    }

    async getUserByEmail(email: string): Promise<DatabaseUser | undefined> {
        return this.prisma.databaseUser.findUnique({
            where: { email }
        })
    }
}
