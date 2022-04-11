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
}
