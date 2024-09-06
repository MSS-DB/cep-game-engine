import { NestFactory } from '@nestjs/core';
import { CampaignSetupModule } from './campaign-setup.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LogService } from '@app/log';
import * as cookieParser from 'cookie-parser';
import { AuthInterceptor } from '@app/auth/interceptors/auth.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CampaignSetupModule, {
    logger: new LogService(),
  });

  app.useGlobalInterceptors(new AuthInterceptor());

  // Using GlobalPipe to transform pagination request values into appropriate variables: https://dev.to/brucexu_eth/comment/1l792
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.use(cookieParser());

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
