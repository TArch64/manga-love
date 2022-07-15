import { resolve } from 'path';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { AppExceptionsFilter } from './app-exceptions.filter';

const { API_PORT, API_HOST } = process.env;

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const httpAdapterHost = app.get(HttpAdapterHost);

    app.use(cookieParser(process.env.API_SECRET));
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AppExceptionsFilter(httpAdapterHost));
    app.setBaseViewsDir(resolve('./src/views'));
    app.setViewEngine('ejs');
    app.enableCors();

    await app.listen(Number(API_PORT), API_HOST, async () => {
        console.log(`Server started at ${await app.getUrl()}`);
    });
}

bootstrap();
