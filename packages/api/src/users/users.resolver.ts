import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserModel } from './models';
import { CurrentUser, GqlAuthGuard, QLCurrentUser } from './auth';

@Resolver(() => UserModel)
export class UsersResolver {
    @UseGuards(GqlAuthGuard)
    @Query(() => UserModel)
    public async currentUser(@QLCurrentUser() currentUser: CurrentUser): Promise<UserModel> {
        console.log('CURRENT USER', currentUser);
        return currentUser;
    }
}
