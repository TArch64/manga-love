import { IsJWT, IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';
import { Language } from '@manga-love/core';

@ArgsType()
export class GoogleSignInArgs {
    @IsNotEmpty()
    @IsJWT()
    @Field()
    public credential: string;

    @Field(() => Language)
    @IsNotEmpty()
    public language: Language;
}
