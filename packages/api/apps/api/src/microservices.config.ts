import { MicroservicesFactoryModule } from '@manga-love/core';

export const { MICROSERVICES, MicroservicesModule } = MicroservicesFactoryModule.create({
    MAILER: { host: process.env.API_MAILER_HOST }
});

