import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { GameEngineModule } from './game-engine.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './game-engine.exceptions.filter';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(GameEngineModule, {
    logger: new LogService(),
  });

  app.use(cookieParser());

  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  const config = new DocumentBuilder()
    .setTitle('Game Engine')
    .setDescription('Game Engine')
    .setVersion('1.0')
    .addTag('game-engine')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}

bootstrap();
