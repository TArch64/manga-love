import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { API_PORT, API_HOST } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(Number(API_PORT), API_HOST, () => {
      console.log(`Server started at http://${API_HOST}:${API_PORT}`);
  });
}
bootstrap();
