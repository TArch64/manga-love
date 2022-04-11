import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { UsersRepository } from './users.repository';
import { PasswordResetsRepository } from './password-resets.repository';

@Module({
    providers: [
        PrismaService,
        UsersRepository,
        PasswordResetsRepository
    ],
    exports: [
        UsersRepository,
        PasswordResetsRepository
    ]
})
export class UsersRepositoryModule {}
