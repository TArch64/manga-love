import { MicroservicesFactoryModule } from '@manga-love/api-core/microservices';

export const { MICROSERVICES, MicroservicesModule } = MicroservicesFactoryModule.create({
    MAILER: { host: process.env.API_MAILER_HOST }
});

