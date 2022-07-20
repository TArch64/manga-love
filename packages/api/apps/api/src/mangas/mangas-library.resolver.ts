import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LibraryFolderRepository } from '@manga-love/database';
import { UseGuards } from '@nestjs/common';
import { UserType } from '../users';
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
    public folders(@Parent() user: UserType): Promise<LibraryFolderType[]> {
        return this.libraryFolderRepository.findByUserId(user.id);
    }
}
