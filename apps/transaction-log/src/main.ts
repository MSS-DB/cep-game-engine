import { NestFactory } from '@nestjs/core';
import { TransactionLogModule } from './transaction-log.module';

async function bootstrap() {
  const app = await NestFactory.create(TransactionLogModule);
  await app.listen(3005);
}

bootstrap();
