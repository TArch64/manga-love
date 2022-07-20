import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserAvatarType } from './user-avatar.type';

@ObjectType('User')
export class UserType {
    @Field(() => ID)
    public id: string;

    @Field()
    public email: string;

    @Field()
    public username: string;

    @Field(() => ID)
    public avatarId: string;

    @Field(() => UserAvatarType)
    public avatar?: UserAvatarType;
}
