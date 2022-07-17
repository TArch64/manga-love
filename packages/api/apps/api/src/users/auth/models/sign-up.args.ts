import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class SignUpArgs {
    @IsNotEmpty()
    @IsString()
    @Field()
    public username: string;

    @IsEmail()
    @Field()
    public email: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    public password: string;
}
