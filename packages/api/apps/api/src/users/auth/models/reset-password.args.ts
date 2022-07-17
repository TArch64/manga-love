import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ResetPasswordArgs {
    @IsNotEmpty()
    @IsString()
    @Field()
    public password: string;

    @IsUUID()
    @Field()
    public code: string;
}
