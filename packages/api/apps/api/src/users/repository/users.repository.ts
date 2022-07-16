import { Injectable } from '@nestjs/common';
import { DatabaseUser, Prisma, PrismaService } from '@manga-love/database';

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async getUserById(id: string): Promise<DatabaseUser | undefined> {
        return this.prisma.databaseUser.findUnique({
            where: { id }
        });
    }

    public async getUserByEmail(email: string): Promise<DatabaseUser | undefined> {
        return this.prisma.databaseUser.findUnique({
            where: { email }
        });
    }

    public async getUserByName(username: string): Promise<DatabaseUser | undefined> {
        return this.prisma.databaseUser.findUnique({
            where: { username }
        });
    }

    public async create(data: Prisma.DatabaseUserCreateInput): Promise<DatabaseUser> {
        return this.prisma.databaseUser.create({ data });
    }

    public async update(id: string, data: Partial<DatabaseUser>): Promise<DatabaseUser> {
        return this.prisma.databaseUser.update({
            where: { id },
            data
        });
    }
}
