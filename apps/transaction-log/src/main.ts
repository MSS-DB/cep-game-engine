import { NestFactory } from '@nestjs/core';
import { TransactionLogModule } from './transaction-log.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(TransactionLogModule);

  const config = new DocumentBuilder()
    .setTitle('Game Engine')
    .setDescription('Game Engine')
    .setVersion('1.0')
    .addTag('game-engine')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
}

bootstrap();
