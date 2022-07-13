import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.createMicroservice<TcpOptions>(AppModule, {
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 3000 }
    });

    await app.listen();
    console.log('API Mailer started');
}

bootstrap();
