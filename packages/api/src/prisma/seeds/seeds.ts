import { client } from '../client-provider';
import { seedUsers } from './users';
import { seedMangas } from './mangas';

const seeds = [
    seedUsers,
    seedMangas
];

(async (): Promise<void> => {
    for (const seed of seeds) {
        console.log(`Running ${seed.name}`);
        await seed();
    }
})()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await client.$disconnect();
    });
