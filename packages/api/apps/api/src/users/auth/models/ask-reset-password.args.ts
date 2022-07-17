import { IsEmail } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class AskResetPasswordArgs {
    @IsEmail()
    @Field()
    public email: string;
}
