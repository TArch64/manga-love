import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType({ description: 'Manga Lover ' })
export class UserModel {
    @Field(type => ID)
    id: string;

    @Field({ nullable: true })
    email: string
}
