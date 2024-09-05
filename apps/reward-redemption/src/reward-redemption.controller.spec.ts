import { Test, TestingModule } from '@nestjs/testing';
import { RewardRedemptionController } from './reward-redemption.controller';
import { RewardRedemptionService } from './reward-redemption.service';

describe('RewardRedemptionController', () => {
  let rewardRedemptionController: RewardRedemptionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RewardRedemptionController],
      providers: [RewardRedemptionService],
    }).compile();

    rewardRedemptionController = app.get<RewardRedemptionController>(
      RewardRedemptionController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rewardRedemptionController.getHello()).toBe('Hello World!');
    });
  });
});
