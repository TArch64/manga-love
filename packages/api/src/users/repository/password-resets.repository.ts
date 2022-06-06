import { Injectable } from '@nestjs/common';
import { DatabasePasswordReset, PrismaService, Prisma, DatabaseUser } from '../../prisma';

@Injectable()
export class PasswordResetsRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async create(user: DatabaseUser, code: string): Promise<DatabasePasswordReset> {
        return this.prisma.databasePasswordReset.create({
            data: {
                userId: user.id,
                email: user.email,
                code
            }
        });
    }

    public async getByCode(code: string): Promise<DatabasePasswordReset | null> {
        const passwordReset = await this.prisma.databasePasswordReset.findUnique({
            where: { code }
        });
        return passwordReset || null;
    }

    public async deleteByUser(user: DatabaseUser): Promise<void> {
        await this.prisma.databasePasswordReset.deleteMany({
            where: { userId: user.id }
        });
    }
}
