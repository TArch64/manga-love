import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LocaleTextType } from '../../common';

@ObjectType('Manga')
export class MangaType {
    @Field(() => ID)
    public id: string;

    @Field(() => ID)
    public titleId: string;

    @Field(() => LocaleTextType)
    public title?: LocaleTextType;
}
