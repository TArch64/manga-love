import { createMicroserviceApp, reportMicroserviceStarted } from '@manga-love/core';
import { AuthModule } from './auth.module';

async function bootstrap(): Promise<void> {
    const app = await createMicroserviceApp(AuthModule);
    await app.listen();
    reportMicroserviceStarted('Auth');
}
bootstrap();
