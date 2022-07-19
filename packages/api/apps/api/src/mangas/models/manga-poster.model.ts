import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DatabaseImage } from '@manga-love/database';

@ObjectType('MangaPoster')
export class MangaPosterModel {
    constructor(model: DatabaseImage) {
        Object.assign(this, model);
    }

    @Field(() => ID)
    public id: string;

    @Field()
    public originalSrc: string;

    @Field()
    public originalWidth: number;

    @Field()
    public originalHeight: number;
}
