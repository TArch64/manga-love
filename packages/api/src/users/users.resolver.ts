import {Resolver, Query} from "@nestjs/graphql";
import {UserModel} from "./models";
import {CurrentUser, QLCurrentUser} from "./auth";

@Resolver(of => UserModel)
export class UsersResolver {
    @Query(returns => UserModel)
    async currentUser(@QLCurrentUser() currentUser: CurrentUser): Promise<UserModel> {
        return currentUser;
    }
}
