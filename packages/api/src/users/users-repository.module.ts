import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { UsersRepository } from './users.repository';

@Module({
    providers: [UsersRepository, PrismaService],
    exports: [UsersRepository]
})
export class UsersRepositoryModule {}
