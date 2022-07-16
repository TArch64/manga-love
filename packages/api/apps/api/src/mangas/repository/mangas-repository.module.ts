import { Module } from '@nestjs/common';
import { PrismaService } from '@manga-love/database';
import { MangasRepository } from './mangas.repository';

@Module({
    providers: [PrismaService, MangasRepository],
    exports: [MangasRepository]
})
export class MangasRepositoryModule {}
