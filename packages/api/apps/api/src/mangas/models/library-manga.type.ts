import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MangaType } from './manga.type';

@ObjectType('LibraryManga')
export class LibraryMangaType {
    @Field(() => ID)
    public folderId: string;

    @Field(() => ID)
    public mangaId: string;

    @Field(() => MangaType)
    public manga?: MangaType;
}
