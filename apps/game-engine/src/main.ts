import { NestFactory } from '@nestjs/core';
import { GameEngineModule } from './game-engine.module';

async function bootstrap() {
  const app = await NestFactory.create(GameEngineModule);
  await app.listen(3002);
}

bootstrap();
