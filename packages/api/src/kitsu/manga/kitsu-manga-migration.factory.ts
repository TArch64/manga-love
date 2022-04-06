import { Injectable } from '@nestjs/common';
import { v4 as generateUUID } from 'uuid';
import { DatabaseMangaSource, DatabaseMangaType, Prisma } from '../../prisma';
import { KitsuManga, KitsuMangaSubtype, KitsuMangaPoster } from './kitsu-manga.model';

@Injectable()
export class KitsuMangaMigrationFactory {
    public migrateList(inputs: KitsuManga[]): Prisma.DatabaseMangaCreateInput[] {
        return inputs.map(this.migrate.bind(this));
    }

    public migrate({ id, attributes }: KitsuManga): Prisma.DatabaseMangaCreateInput {
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
            posters: {
                create: [this.migratePoster(attributes.posterImage)]
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

    private migratePoster(input: KitsuMangaPoster): Prisma.DatabaseImageCreateWithoutTargetMangaInput {
        const { width, height } = input.meta.dimensions.medium;

        return {
            id: generateUUID(),
            originalSrc: input.original,
            originalAspectRatio: width / height
        };
    }
}
