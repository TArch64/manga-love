import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MangasRepository } from '@manga-love/database';
import { LocaleTextType } from '../common';
import { MangaType } from './models';

@Resolver(() => MangaType)
export class MangaResolver {
    constructor(private readonly mangasRepository: MangasRepository) {}

    @ResolveField(() => LocaleTextType)
    public title(@Parent() manga: MangaType): Promise<LocaleTextType> {
        return this.mangasRepository.getById(manga.id).title();
    }
}
