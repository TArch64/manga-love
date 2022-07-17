import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmailVerificationStateType {
    @Field()
    public isValid: boolean;

    @Field()
    public name: string;
}
