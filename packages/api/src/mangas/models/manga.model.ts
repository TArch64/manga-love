import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { DatabaseMangaType } from '../../prisma';

registerEnumType(DatabaseMangaType, { name: 'MangaType' });

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

    @Field()
    public description: string;

    @Field(() => DatabaseMangaType, { name: '' })
    public type: DatabaseMangaType;

    @Field({ nullable: true })
    public releaseDate: Date;

    @Field({ nullable: true })
    public finishDate: Date;
}
