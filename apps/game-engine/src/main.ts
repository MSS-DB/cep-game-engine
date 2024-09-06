import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { GameEngineModule } from './game-engine.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './game-engine.exceptions.filter';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';
import { AuthInterceptor } from '@app/auth/interceptors/auth.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(GameEngineModule, {
    logger: new LogService(),
  });

  app.use(cookieParser());

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
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

  const config = new DocumentBuilder()
    .setTitle('Game Engine')
    .setDescription('Game Engine')
    .setVersion('1.0')
    .addTag('game-engine')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}

bootstrap();
