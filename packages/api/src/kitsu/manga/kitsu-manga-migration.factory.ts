import { Injectable } from '@nestjs/common';
import { DatabaseMangaSource, DatabaseMangaType, Prisma } from '../../prisma';
import { KitsuManga, KitsuMangaSubtype } from './kitsu-manga.model';

@Injectable()
export class KitsuMangaMigrationFactory {
    public migrateManga({ id, attributes }: KitsuManga): Prisma.DatabaseMangaCreateInput {
        return {
            source: DatabaseMangaSource.KITSU,
            sourceId: id,
            originalName: attributes.canonicalTitle,
            description: this.migrateDescription(attributes.description),
            releaseDate: attributes.startDate ? new Date(attributes.startDate) : null,
            finishDate: attributes.endDate ? new Date(attributes.endDate) : null,
            type: this.migrateType(attributes.subtype)
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
}
