import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserActionStateType {
    @Field()
    public isValid: boolean;

    @Field()
    public username: string;
}
