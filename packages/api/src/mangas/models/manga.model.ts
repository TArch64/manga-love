import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Manga' })
export class MangaModel {
    @Field((type) => ID)
    public id: string;

    @Field()
    public createdAt: Date;

    @Field()
    public originalName: string;

    @Field({ nullable: true })
    public uaName: string;
}
