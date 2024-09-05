import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionLogService {
  getHello(): string {
    return 'Hello World!';
  }
}
