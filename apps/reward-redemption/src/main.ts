import { NestFactory } from '@nestjs/core';
import { RewardRedemptionModule } from './reward-redemption.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(RewardRedemptionModule);

  const config = new DocumentBuilder()
    .setTitle('Reward Redemption')
    .setDescription('Reward Redemption')
    .setVersion('1.0')
    .addTag('reward-redemption')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}

bootstrap();
