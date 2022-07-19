import { createMicroserviceApp, reportMicroserviceStarted } from '@manga-love/core';
import { UploaderModule } from './uploader.module';

async function bootstrap(): Promise<void> {
    const app = await createMicroserviceApp(UploaderModule);
    await app.listen();
    reportMicroserviceStarted('Uploader');
}

bootstrap();
