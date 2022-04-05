import { Injectable } from '@nestjs/common';
import { v4 as generateUUID } from 'uuid';
import { DatabaseImageEdgeTarget, DatabaseMangaSource, DatabaseMangaType, Prisma } from '../../prisma';
import { KitsuManga, KitsuMangaSubtype, KitsuMangaPoster } from './kitsu-manga.model';

interface KitsuMangaMigration {
    poster: Prisma.DatabaseImageCreateInput;
    manga: Prisma.DatabaseMangaCreateInput;
}

@Injectable()
export class KitsuMangaMigrationFactory {
    public migrateList(inputs: KitsuManga[]): KitsuMangaMigration[] {
        return inputs.map(this.migrate.bind(this));
    }

    public migrate(input: KitsuManga): KitsuMangaMigration {
        const manga = this.migrateManga(input);
        const poster = this.migratePoster(manga.id, input.attributes.posterImage);
        return { poster, manga };
    }

    private migrateManga({ id, attributes }: KitsuManga): KitsuMangaMigration['manga'] {
        const mangaId = generateUUID();

        return {
            id: mangaId,
            source: DatabaseMangaSource.KITSU,
            sourceId: id,
            originalName: attributes.canonicalTitle,
            description: this.migrateDescription(attributes.description),
            releaseDate: attributes.startDate ? new Date(attributes.startDate) : null,
            finishDate: attributes.endDate ? new Date(attributes.endDate) : null,
            type: this.migrateType(attributes.subtype),
            posterEdge: {
                connect: {
                    imageEdgeIdentifier: {
                        targetId: mangaId,
                        type: DatabaseImageEdgeTarget.MANGA
                    }
                }
            }
        };
    }

    private migrateType(input: KitsuMangaSubtype): DatabaseMangaType {
        switch (input) {
            case KitsuMangaSubtype.MANHUA:
                return DatabaseMangaType.MANHUA;
            case KitsuMangaSubtype.MANHWA:
                return DatabaseMangaType.MANHWA;
            default:
                return DatabaseMangaType.MANGA;
        }
    }

    private migrateDescription(input: string): string {
        if (input.toLowerCase().includes('no synopsis')) return '';
        return input;
    }

    private migratePoster(mangaId, input: KitsuMangaPoster): KitsuMangaMigration['poster'] {
        const { width, height } = input.meta.dimensions.medium;

        return {
            id: generateUUID(),
            originalSrc: input.original,
            originalAspectRatio: width / height,
            edge: {
                create: {
                    type: DatabaseImageEdgeTarget.MANGA,
                    targetId: mangaId
                }
            }
        };
    }
}
