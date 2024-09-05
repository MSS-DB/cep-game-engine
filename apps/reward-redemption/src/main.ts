import { NestFactory } from '@nestjs/core';
import { RewardRedemptionModule } from './reward-redemption.module';

async function bootstrap() {
  const app = await NestFactory.create(RewardRedemptionModule);
  await app.listen(3003);
}

bootstrap();
