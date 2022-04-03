import { Resolver, Query } from '@nestjs/graphql';
import { UserModel } from './models';
import { CurrentUser, QLCurrentUser } from './auth';

@Resolver(() => UserModel)
export class UsersResolver {
    @Query(() => UserModel)
    public async currentUser(@QLCurrentUser() currentUser: CurrentUser): Promise<UserModel> {
        return currentUser;
    }
}
