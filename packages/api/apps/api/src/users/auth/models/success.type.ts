import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Success')
export class SuccessType {
    @Field()
    public success: true;
}
