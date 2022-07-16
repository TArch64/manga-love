import { Injectable } from '@nestjs/common';
import { DatabaseUserAction, DatabaseUserActionType, PrismaService, DatabaseUser } from '@manga-love/database';

@Injectable()
export class UserActionsRepository {
    constructor(private readonly prisma: PrismaService) {}

    public async create(user: DatabaseUser, type: DatabaseUserActionType): Promise<DatabaseUserAction> {
        return this.prisma.databaseUserAction.create({
            data: { userId: user.id, type }
        });
    }

    public async getByCode(code: string): Promise<DatabaseUserAction | null> {
        return await this.prisma.databaseUserAction.findUnique({
            where: { code }
        }) || null;
    }

    public async deleteByType(user: DatabaseUser, type: DatabaseUserActionType): Promise<void> {
        await this.prisma.databaseUserAction.deleteMany({
            where: {
                userId: user.id,
                type
            }
        });
    }
}
