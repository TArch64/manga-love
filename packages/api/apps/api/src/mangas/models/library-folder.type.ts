import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('LibraryFolder')
export class LibraryFolderType {
    @Field(() => ID)
    public id: string;

    @Field()
    public name: string;

    @Field(() => Int)
    public mangaCount: number;
}
