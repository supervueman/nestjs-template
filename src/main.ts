import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  // tslint:disable-next-line: no-console
  AppController.getWord();
  // console.log();
}
bootstrap();
