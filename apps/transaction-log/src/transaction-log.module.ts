import { Module } from '@nestjs/common';
import { TransactionLogController } from './transaction-log.controller';
import { TransactionLogService } from './transaction-log.service';

@Module({
  imports: [],
  controllers: [TransactionLogController],
  providers: [TransactionLogService],
})
export class TransactionLogModule {}
