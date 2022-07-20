import { IsUUID } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class VerifyEmailBody {
    @IsUUID()
    @Field()
    public code: string;
}
