import { client, DatabaseManga } from '../client-provider';

async function buildManga(manga: Omit<DatabaseManga, 'createdAt'>): Promise<void> {
    await client.databaseManga.upsert({
        where: { id: manga.id },
        create: manga,
        update: {}
    });
}

export async function seedMangas(): Promise<void> {
    await buildManga({
        id: 'b5a81e87-4e16-4ad2-b937-3ac5f9fcb09c',
        originalName: 'Onepunch-Man',
        uaName: 'Ванпанч Мен'
    });

    await buildManga({
        id: 'f4b253c9-cafb-4106-9fd1-cf4ca2784496',
        originalName: 'Kumo Desu ga, Nani ka?',
        uaName: 'Да я павук, і що?'
    });

    await buildManga({
        id: 'ab71b2f5-686b-43be-9122-b9268da24d04',
        originalName: 'FFF-Class Trashero',
        uaName: 'Ублюдок FFF-ранга'
    });
}
