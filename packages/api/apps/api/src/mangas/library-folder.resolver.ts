import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LibraryFolderRepository } from '@manga-love/database';
import { CurrentUser, QLCurrentUser } from '../auth';
import { LibraryFolderType, LibraryMangaType } from './models';

@Resolver(() => LibraryFolderType)
export class LibraryFolderResolver {
    constructor(private readonly libraryFolderRepository: LibraryFolderRepository) {}

    @ResolveField(() => [LibraryMangaType])
    public items(
        @QLCurrentUser() currentUser: CurrentUser,
        @Parent() folder: LibraryFolderType
    ): Promise<LibraryMangaType[]> {
        return this.libraryFolderRepository.getScopedById(currentUser.id, folder.id).mangas();
    }
}
