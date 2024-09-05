import { Module } from '@nestjs/common';
import { GameEngineController } from './game-engine.controller';
import { GameEngineService } from './game-engine.service';
import { AuthModule } from '@app/auth';
import { DatabaseModule } from '@app/database';
import { EventModule } from '@app/event';
import { HealthModule } from '@app/health';
import { I18nModule } from '@app/i18n';
import { InterServiceModule } from '@app/inter-service';
import { LogModule } from '@app/log';
import { NotificationModule } from '@app/notification';
import { SecurityModule } from '@app/security';
import { UtilsModule } from '@app/utils';
import { ValidationModule } from '@app/validation';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './game-engine.exceptions.filter';
import { gameEngineProviders } from './game-engine.providers';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    EventModule,
    HealthModule,
    I18nModule,
    InterServiceModule,
    LogModule,
    NotificationModule,
    SecurityModule,
    UtilsModule,
    ValidationModule,
  ],
  controllers: [GameEngineController],
  providers: [
    GameEngineService,
    ...gameEngineProviders,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class GameEngineModule {}
