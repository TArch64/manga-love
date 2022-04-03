import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { MangasRepository } from './mangas.repository';

@Module({
    providers: [PrismaService, MangasRepository],
    exports: [MangasRepository]
})
export class MangasRepositoryModule {}
