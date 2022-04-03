import { Resolver, Query, Args } from '@nestjs/graphql';
import { MangaModel, MangaFilterArgs } from './models';
import { MangasRepository } from './repository';

@Resolver(() => MangaModel)
export class MangasResolver {
    constructor(private readonly mangas: MangasRepository) {}

    @Query(() => [MangaModel], { name: 'mangas' })
    public async filter(@Args() filter: MangaFilterArgs): Promise<MangaModel[]> {
        return this.mangas.filter(filter);
    }
}
