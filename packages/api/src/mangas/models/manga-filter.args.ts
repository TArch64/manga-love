import { ArgsType, Field } from '@nestjs/graphql';
import { MangaFilter } from '../repository';

@ArgsType()
export class MangaFilterArgs implements MangaFilter {
    @Field()
    public offset: number;

    @Field()
    public limit: number;
}
