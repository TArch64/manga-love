import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LibraryFolderRepository, MangasRepository } from '@manga-love/database';
import { LibraryMangaType, MangaType } from './models';

@Resolver(() => LibraryMangaType)
export class LibraryMangaResolver {
    constructor(
        private readonly libraryFolderRepository: LibraryFolderRepository,
        private readonly mangasRepository: MangasRepository
    ) {}

    @ResolveField(() => MangaType)
    public manga(@Parent() item: LibraryMangaType): Promise<MangaType> {
        return this.mangasRepository.getById(item.mangaId);
    }
}
