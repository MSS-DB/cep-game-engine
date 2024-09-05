import { NestFactory } from '@nestjs/core';
import { GameEngineModule } from './game-engine.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GameEngineModule);

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
