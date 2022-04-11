import { client, DatabaseMangaSource } from '../client-provider';
import { KitsuMangaMigrationFactory, KitsuManga } from '../../kitsu';
import * as kitsuSnapshot from './mangas-kitsu-snapshot.json';

export async function seedMangas(): Promise<void> {
    const migrationFactory = new KitsuMangaMigrationFactory();
    const mangas = migrationFactory.migrateList(kitsuSnapshot as KitsuManga[]);

    for (const manga of mangas) {
        await client.databaseManga.upsert({
            where: {
                sourceIdentifier: {
                    source: DatabaseMangaSource.KITSU,
                    sourceId: manga.sourceId
                }
            },
            update: {},
            create: manga
        });
    }
}
