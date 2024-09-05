import { Module } from '@nestjs/common';
import { TransactionLogController } from './transaction-log.controller';
import { TransactionLogService } from './transaction-log.service';
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
  controllers: [TransactionLogController],
  providers: [TransactionLogService],
})
export class TransactionLogModule {}
