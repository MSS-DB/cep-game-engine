import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthInterceptor } from '@app/auth/interceptors/auth.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule, {
    logger: new LogService(),
  });

  app.useGlobalInterceptors(new AuthInterceptor());

  // Using GlobalPipe to transform pagination request values into appropriate variables: https://dev.to/brucexu_eth/comment/1l792
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

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
