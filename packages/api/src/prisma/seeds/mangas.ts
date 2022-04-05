import { client } from '../client-provider';
import { KitsuMangaMigrationFactory, KitsuManga } from '../../kitsu';
import * as kitsuSnapshot from './mangas-kitsu-snapshot.json';

export async function seedMangas(): Promise<void> {
    const migrationFactory = new KitsuMangaMigrationFactory();
    const migrations = migrationFactory.migrateList(kitsuSnapshot as KitsuManga[]);

    for (const { poster, manga } of migrations) {
        await client.databaseImage.upsert({
            where: { id: poster.id },
            update: {},
            create: poster
        });

        await client.databaseManga.upsert({
            where: { id: manga.id },
            update: {},
            create: manga
        });
    }
}
