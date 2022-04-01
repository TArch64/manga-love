import {Resolver, Query} from "@nestjs/graphql";
import {UserModel} from "./models";
import {UsersRepository} from "./users.repository";

@Resolver(of => UserModel)
export class UsersResolver {
    constructor(private readonly repository: UsersRepository) {}

    @Query(returns => UserModel)
    async currentUser(): Promise<UserModel> {
        return this.repository.getUserById('');
    }
}
