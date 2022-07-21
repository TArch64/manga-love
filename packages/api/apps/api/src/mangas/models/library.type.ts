import { Field, ObjectType } from '@nestjs/graphql';
import { LibraryFolderType } from './library-folder.type';

@ObjectType('Library')
export class LibraryType {
    @Field(() => [LibraryFolderType])
    public folders?: LibraryFolderType[];

    @Field(() => LibraryFolderType)
    public folder?: LibraryFolderType;
}
