import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogService } from '@app/log';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LogService(),
  });

  const config = new DocumentBuilder()
    .setTitle('CEP Game Engine')
    .setDescription('Main Application')
    .setVersion('1.0')
    .addTag('main')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
