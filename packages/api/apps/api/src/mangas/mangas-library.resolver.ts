import { Args, ID, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LibraryFolderRepository } from '@manga-love/database';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard, QLCurrentUser } from '../auth';
import { LibraryFolderType, LibraryType } from './models';

@Resolver(() => LibraryType)
export class MangasLibraryResolver {
    constructor(private readonly libraryFolderRepository: LibraryFolderRepository) {}

    @UseGuards(GqlAuthGuard)
    @Query(() => LibraryType)
    public library(@QLCurrentUser() currentUser: CurrentUser): LibraryType {
        return {};
    }

    @ResolveField(() => [LibraryFolderType])
    public folders(@QLCurrentUser() currentUser: CurrentUser): Promise<LibraryFolderType[]> {
        return this.libraryFolderRepository.findByUserId(currentUser.id);
    }

    @ResolveField(() => LibraryFolderType)
    public folder(
        @QLCurrentUser() currentUser: CurrentUser,
        @Args('id', { type: () => ID }) folderId: string
    ): Promise<LibraryFolderType> {
        return this.libraryFolderRepository.getScopedById(currentUser.id, folderId);
    }
}
