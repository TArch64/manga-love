import { client, DatabaseMangaSource } from '../client-provider';
import { KitsuMangaMigrationFactory, KitsuManga } from '../../kitsu';
import * as kitsuSnapshot from './mangas-kitsu-snapshot.json';

export async function seedMangas(): Promise<void> {
    const mangas = kitsuSnapshot as KitsuManga[];
    const migrationFactory = new KitsuMangaMigrationFactory();

    for (const manga of mangas) {
        await client.databaseManga.upsert({
            where: {
                sourceIdentifier: {
                    source: DatabaseMangaSource.KITSU,
                    sourceId: manga.id
                }
            },
            create: migrationFactory.migrateManga(manga),
            update: {}
        });
    }
}
