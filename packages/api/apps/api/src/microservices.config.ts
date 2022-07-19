import { MicroservicesFactoryModule } from '@manga-love/core';

export const { MICROSERVICES, MicroservicesModule } = MicroservicesFactoryModule.create({
    AUTH: { host: process.env.API_AUTH_HOST }
});
