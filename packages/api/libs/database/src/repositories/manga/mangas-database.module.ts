import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { UsersDatabaseModule } from '../user';
import { LibraryFolderRepository } from './library-folder.repository';
import { MangasRepository } from './mangas.repository';

@Module({
    imports: [
        UsersDatabaseModule
    ],
    providers: [
        PrismaService,
        LibraryFolderRepository,
        MangasRepository
    ],
    exports: [
        LibraryFolderRepository,
        MangasRepository
    ]
})
export class MangasDatabaseModule {}
