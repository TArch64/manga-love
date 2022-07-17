import { IsJWT, IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GoogleSignInArgs {
    @IsNotEmpty()
    @IsJWT()
    @Field()
    public credential: string;
}
