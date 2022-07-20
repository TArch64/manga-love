import { Module } from '@nestjs/common';
import { MangasDatabaseModule } from '@manga-love/database';
import { MangasLibraryResolver } from './mangas-library.resolver';

@Module({
    imports: [
        MangasDatabaseModule
    ],
    providers: [
        MangasLibraryResolver
    ]
})
export class MangasModule {}
