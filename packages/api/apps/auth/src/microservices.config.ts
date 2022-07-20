import { MicroservicesFactoryModule } from '@manga-love/core';

export const { MICROSERVICES, MicroservicesModule } = MicroservicesFactoryModule.create(
    'MAILER',
    'UPLOADER',
    'MANGA_LIBRARY'
);
