import {HttpAdapterHost, NestFactory} from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import {resolve} from 'path';
import {AppModule} from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {AppExceptionsFilter} from "./app-exceptions.filter";

const {API_PORT, API_HOST} = process.env;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const httpAdapterHost = app.get(HttpAdapterHost);

    app.use(cookieParser(process.env.API_SECRET));
    app.useGlobalFilters(new AppExceptionsFilter(httpAdapterHost));
    app.setBaseViewsDir(resolve('./src/views'));
    app.setViewEngine('ejs')
    app.enableCors();

    await app.listen(Number(API_PORT), API_HOST, async () => {
        console.log(`Server started at ${await app.getUrl()}`);
    });
}

bootstrap();
