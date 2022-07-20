import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma';
import { UsersDatabaseModule } from '../user';
import { LibraryFolderRepository } from './library-folder.repository';

@Module({
    imports: [
        UsersDatabaseModule
    ],
    providers: [
        PrismaService,
        LibraryFolderRepository
    ],
    exports: [
        LibraryFolderRepository
    ]
})
export class MangasDatabaseModule {}
