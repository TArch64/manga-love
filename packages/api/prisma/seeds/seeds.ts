import { client } from './client';
import {seedUsers} from "./users";

const seeds = [
    seedUsers
];

(async () => {
    for (const seed of seeds) {
        await seed();
    }
})()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await client.$disconnect()
    })
