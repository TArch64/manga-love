import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('LocaleText')
export class LocaleTextType {
    @Field(() => ID)
    public id: string;

    @Field()
    public en: string;

    @Field()
    public ua: string;
}
