import { Field, ObjectType } from '@nestjs/graphql';
import { LibraryFolderModel } from './library-folder.model';

@ObjectType('Library')
export class LibraryModel {
    @Field(() => [LibraryFolderModel])
    public libraryFolders?: LibraryFolderModel[];
}
