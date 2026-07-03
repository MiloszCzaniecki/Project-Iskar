import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.enableCors({ origin: 'http://localhost:4200' }); // allows Angular to access backend data via API

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // deletes fields lacking in DTO
      forbidNonWhitelisted: true, // refuses additional fields in API response
    }),
  );
}
bootstrap();
