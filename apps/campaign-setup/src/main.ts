import { NestFactory } from '@nestjs/core';
import { CampaignSetupModule } from './campaign-setup.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(CampaignSetupModule);

  const config = new DocumentBuilder()
    .setTitle('Reward Redemption')
    .setDescription('Reward Redemption')
    .setVersion('1.0')
    .addTag('reward-redemption')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}

bootstrap();
