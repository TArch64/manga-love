import {Resolver, Query} from "@nestjs/graphql";
import {UserModel} from "./models";

@Resolver(of => UserModel)
export class UsersResolver {
    @Query(returns => UserModel)
    async currentUser(): Promise<UserModel> {
        const model = new UserModel();
        model.id = '123';
        return model;
    }
}
