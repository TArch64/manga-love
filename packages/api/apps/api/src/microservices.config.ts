import { MicroservicesFactoryModule } from '@manga-love/api-core';

export const { MICROSERVICES, MicroservicesModule } = MicroservicesFactoryModule.create({
    MAILER: { host: process.env.API_MAILER_HOST }
});

