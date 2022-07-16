import { NestFactory } from '@nestjs/core';
import { reportMicroserviceStarted } from '@manga-love/api-core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { ApiMailerModule } from './api-mailer.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice<TcpOptions>(ApiMailerModule, {
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 }
    });
    await app.listen();
    reportMicroserviceStarted('Mailer');
}

bootstrap();
