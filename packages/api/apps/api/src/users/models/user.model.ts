import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LibraryFolderModel } from '../../mangas/models';
import { UserAvatarModel } from './user-avatar.model';

@ObjectType('User')
export class UserModel {
    @Field(() => ID)
    public id: string;

    @Field()
    public email: string;

    @Field()
    public username: string;

    @Field(() => ID)
    public avatarId: string;

    @Field(() => UserAvatarModel)
    public avatar?: UserAvatarModel;

    @Field(() => [LibraryFolderModel])
    public libraryFolders?: LibraryFolderModel[];
}
