import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersRepository } from '@manga-love/database';
import { CurrentUser, GqlAuthGuard, QLCurrentUser } from '../auth';
import { UserType, UserAvatarType } from './models';

@Resolver(() => UserType)
export class UsersResolver {
    constructor(private readonly usersRepository: UsersRepository) {}

    @UseGuards(GqlAuthGuard)
    @Query(() => UserType)
    public currentUser(@QLCurrentUser() currentUser: CurrentUser): UserType {
        return currentUser;
    }

    @ResolveField()
    public async avatar(@Parent() user: UserType): Promise<UserAvatarType> {
        return this.usersRepository.getUserAvatarById(user.avatarId);
    }
}
