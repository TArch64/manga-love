import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Manga Lover ' })
export class UserModel {
    @Field((type) => ID)
    public id: string;

    @Field({ nullable: true })
    public email: string;
}
