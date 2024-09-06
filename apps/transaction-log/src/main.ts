import { NestFactory } from '@nestjs/core';
import { TransactionLogModule } from './transaction-log.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(TransactionLogModule, {
    logger: new LogService(),
  });

  app.use(cookieParser());

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
