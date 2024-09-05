import { Controller, Get } from '@nestjs/common';
import { TransactionLogService } from './transaction-log.service';

@Controller()
export class TransactionLogController {
  constructor(private readonly transactionLogService: TransactionLogService) {}

  @Get()
  getHello(): string {
    return this.transactionLogService.getHello();
  }
}
