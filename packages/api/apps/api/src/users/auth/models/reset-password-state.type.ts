import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResetPasswordStateType {
    @Field()
    public isValid: boolean;
}
