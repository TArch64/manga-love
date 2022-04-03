import { client } from '../client-provider';

export async function seedUsers(): Promise<void> {
    await client.databaseUser.upsert({
        where: { email: 'test@mail.com' },
        create: {
            email: 'test@mail.com',
            password: '$2b$10$.UBN3T0r90OeA6n5GG2gfOiTby2/AkViDEjN/I0vqiOzFZOSlw0me'
        },
        update: {
            password: '$2b$10$.UBN3T0r90OeA6n5GG2gfOiTby2/AkViDEjN/I0vqiOzFZOSlw0me'
        }
    });
}
