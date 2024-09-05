import { NestFactory } from '@nestjs/core';
import { CampaignSetupModule } from './campaign-setup.module';

async function bootstrap() {
  const app = await NestFactory.create(CampaignSetupModule);
  await app.listen(3001);
}

bootstrap();
