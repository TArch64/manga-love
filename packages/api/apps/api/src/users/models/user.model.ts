import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserModel {
    @Field(() => ID)
    public id: string;

    @Field({ nullable: true })
    public email: string;
}
