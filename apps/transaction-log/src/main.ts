import { NestFactory } from '@nestjs/core';
import { TransactionLogModule } from './transaction-log.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(TransactionLogModule);

  const config = new DocumentBuilder()
    .setTitle('Transaction Log')
    .setDescription('Transaction Log')
    .setVersion('1.0')
    .addTag('transaction-log')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
}

bootstrap();
