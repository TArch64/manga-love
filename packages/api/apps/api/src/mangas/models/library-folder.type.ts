import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { LibraryMangaType } from './library-manga.type';

@ObjectType('LibraryFolder')
export class LibraryFolderType {
    @Field(() => ID)
    public id: string;

    @Field()
    public name: string;

    @Field(() => Int)
    public mangaCount: number;

    @Field(() => [LibraryMangaType])
    public items?: LibraryMangaType[];
}
