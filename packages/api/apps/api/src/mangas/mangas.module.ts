import { Module } from '@nestjs/common';
import { MangasDatabaseModule } from '@manga-love/database';
import { LibraryResolver } from './library.resolver';
import { LibraryFolderResolver } from './library-folder.resolver';
import { LibraryMangaResolver } from './library-manga.resolver';
import { MangaResolver } from './manga.resolver';

@Module({
    imports: [
        MangasDatabaseModule
    ],
    providers: [
        LibraryResolver,
        LibraryFolderResolver,
        LibraryMangaResolver,
        MangaResolver
    ]
})
export class MangasModule {}
