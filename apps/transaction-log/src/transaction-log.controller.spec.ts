import { Test, TestingModule } from '@nestjs/testing';
import { TransactionLogController } from './transaction-log.controller';
import { TransactionLogService } from './transaction-log.service';

describe('TransactionLogController', () => {
  let transactionLogController: TransactionLogController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransactionLogController],
      providers: [TransactionLogService],
    }).compile();

    transactionLogController = app.get<TransactionLogController>(
      TransactionLogController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(transactionLogController.getHello()).toBe('Hello World!');
    });
  });
});
