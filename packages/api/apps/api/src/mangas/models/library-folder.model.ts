import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('LibraryFolder')
export class LibraryFolderModel {
    @Field(() => ID)
    public id: string;

    @Field()
    public name: string;
}
