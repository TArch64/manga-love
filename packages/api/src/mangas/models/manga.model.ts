import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { DatabaseManga, DatabaseMangaType } from '../../prisma';
import { MangaPosterModel } from './manga-poster.model';

registerEnumType(DatabaseMangaType, { name: 'MangaType' });

@ObjectType('Manga')
export class MangaModel {
    constructor(model: DatabaseManga) {
        Object.assign(this, model);
    }

    @Field(() => ID)
    public id: string;

    @Field()
    public createdAt: Date;

    @Field()
    public originalName: string;

    @Field({ nullable: true })
    public uaName: string;

    @Field()
    public description: string;

    @Field(() => DatabaseMangaType)
    public type: DatabaseMangaType;

    @Field({ nullable: true })
    public releaseDate: Date;

    @Field({ nullable: true })
    public finishDate: Date;

    @Field(() => [MangaPosterModel])
    public posters: MangaPosterModel[];
}
