import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LibraryFolderRepository } from '@manga-love/database';
import { UseGuards } from '@nestjs/common';
import { UserModel } from '../users/models';
import { CurrentUser, GqlAuthGuard, QLCurrentUser } from '../users/auth';
import { LibraryFolderModel, LibraryModel } from './models';

@Resolver(() => LibraryModel)
export class MangasLibraryResolver {
    constructor(private readonly libraryFolderRepository: LibraryFolderRepository) {}

    @UseGuards(GqlAuthGuard)
    @Query(() => LibraryModel)
    public library(@QLCurrentUser() currentUser: CurrentUser): LibraryModel {
        return {};
    }

    @ResolveField(() => [LibraryFolderModel])
    public libraryFolders(@Parent() user: UserModel): Promise<LibraryFolderModel[]> {
        return this.libraryFolderRepository.findByUserId(user.id);
    }
}
