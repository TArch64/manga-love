import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';
import { reportMicroserviceStarted } from '@manga-love/api-core';
import { ApiAuthModule } from './api-auth.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice<TcpOptions>(ApiAuthModule, {
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 }
    });
    await app.listen();
    reportMicroserviceStarted('Auth');
}
bootstrap();
