import { client, DatabaseMangaSource } from '../client-provider';
import * as kitsuSnapshot from './kitsu-snapshot.json';

export async function seedMangas(): Promise<void> {
    for (const manga of kitsuSnapshot) {
        await client.databaseManga.upsert({
            where: {
                sourceIdentifier: {
                    source: DatabaseMangaSource.KITSU,
                    sourceId: manga.id
                }
            },
            create: {
                source: DatabaseMangaSource.KITSU,
                sourceId: manga.id,
                originalName: manga.attributes.canonicalTitle
            },
            update: {}
        });
    }
}
