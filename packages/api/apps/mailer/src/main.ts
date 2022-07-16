import { createMicroserviceApp, reportMicroserviceStarted } from '@manga-love/core';
import { MailerModule } from './mailer.module';

async function bootstrap(): Promise<void> {
    const app = await createMicroserviceApp(MailerModule);
    await app.listen();
    reportMicroserviceStarted('Mailer');
}

bootstrap();
