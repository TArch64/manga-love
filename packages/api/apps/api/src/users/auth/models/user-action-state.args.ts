import { ArgsType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ArgsType()
export class UserActionStateArgs {
    @IsUUID()
    @Field()
    public code: string;
}
