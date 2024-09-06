import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule, {
    logger: new LogService(),
  });

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Task')
    .setDescription('Task')
    .setVersion('1.0')
    .addTag('task')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3004);
}

bootstrap();
