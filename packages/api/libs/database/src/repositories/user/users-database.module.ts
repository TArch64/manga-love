import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { UsersRepository } from './users.repository';
import { UserActionsRepository } from './user-actions.repository';

@Module({
    providers: [
        PrismaService,
        UsersRepository,
        UserActionsRepository
    ],
    exports: [
        UsersRepository,
        UserActionsRepository
    ]
})
export class UsersDatabaseModule {}
