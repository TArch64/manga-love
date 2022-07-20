import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('LibraryFolder')
export class LibraryFolderType {
    @Field(() => ID)
    public id: string;

    @Field()
    public name: string;
}
