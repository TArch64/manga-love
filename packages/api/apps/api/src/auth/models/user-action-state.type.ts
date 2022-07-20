import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('UserActionState')
export class UserActionStateType {
    @Field()
    public isValid: boolean;

    @Field()
    public username: string;
}
