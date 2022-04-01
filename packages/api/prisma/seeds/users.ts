import {client} from "./client";

export async function seedUsers() {
    await client.databaseUser.upsert({
        where: {email: 'test@mail.com'},
        create: {email: 'test@mail.com'},
        update: {}
    })
}
