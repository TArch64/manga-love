import { createMicroserviceApp, reportMicroserviceStarted } from '@manga-love/core';
import { MangaLibraryModule } from './manga-library.module';

async function bootstrap(): Promise<void> {
    const app = await createMicroserviceApp(MangaLibraryModule);
    await app.listen();
    reportMicroserviceStarted('Manga Library');
}

bootstrap();
