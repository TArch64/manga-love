import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Language, reportMicroserviceStarted } from '@manga-love/core';
import { registerEnumType } from '@nestjs/graphql';
import { AppModule } from './app.module';

registerEnumType(Language, { name: 'Language' });

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.use(cookieParser(process.env.API_SECRET));
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();

    await app.listen(3000, '0.0.0.0');
    reportMicroserviceStarted('Main');
}

bootstrap();
