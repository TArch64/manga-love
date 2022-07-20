import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersRepository } from '@manga-love/database';
import { CurrentUser, GqlAuthGuard, QLCurrentUser } from '../auth';
import { UserModel, UserAvatarModel } from './models';

@Resolver(() => UserModel)
export class UsersResolver {
    constructor(private readonly usersRepository: UsersRepository) {}

    @UseGuards(GqlAuthGuard)
    @Query(() => UserModel)
    public currentUser(@QLCurrentUser() currentUser: CurrentUser): UserModel {
        return currentUser;
    }

    @ResolveField()
    public async avatar(@Parent() user: UserModel): Promise<UserAvatarModel> {
        return this.usersRepository.getUserAvatarById(user.avatarId);
    }
}
