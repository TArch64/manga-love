import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { MangaModel, MangaFilterArgs, MangaPosterModel } from './models';
import { MangasRepository } from './repository';

@Resolver(() => MangaModel)
export class MangasResolver {
    constructor(private readonly mangas: MangasRepository) {}

    @Query(() => [MangaModel], { name: 'mangas' })
    public async filter(@Args() filter: MangaFilterArgs): Promise<MangaModel[]> {
        const list = await this.mangas.filter(filter);
        return list.map((model) => new MangaModel(model));
    }

    @ResolveField(() => [MangaPosterModel], { name: 'posters' })
    public async mangaPoster(@Parent() manga: MangaModel): Promise<MangaPosterModel[]> {
        const list = await this.mangas.getPostersByMangaId(manga.id);
        return list.map((model) => new MangaPosterModel(model));
    }
}
