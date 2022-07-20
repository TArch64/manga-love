import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('UserAvatar')
export class UserAvatarModel {
    @Field(() => ID)
    public id: string;

    @Field()
    public originalWidth: number;

    @Field()
    public originalHeight: number;

    @Field()
    public originalSrc: string;
}
