import { client, DatabaseUser } from '../client-provider';

async function buildUser(user: Omit<DatabaseUser, 'id'>): Promise<void> {
    await client.databaseUser.upsert({
        where: { email: user.email },
        create: user,
        update: {}
    });
}

export async function seedUsers(): Promise<void> {
    await buildUser({
        email: 'test@mail.com',
        password: '$2b$10$.UBN3T0r90OeA6n5GG2gfOiTby2/AkViDEjN/I0vqiOzFZOSlw0me'
    });
}
