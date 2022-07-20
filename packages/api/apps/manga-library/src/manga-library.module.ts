import { Module } from '@nestjs/common';
import { MangasDatabaseModule } from '@manga-love/database';
import { MangaLibraryController } from './controllers';
import { LibraryFolderService } from './services';

@Module({
    imports: [MangasDatabaseModule],
    controllers: [MangaLibraryController],
    providers: [LibraryFolderService]
})
export class MangaLibraryModule {}
