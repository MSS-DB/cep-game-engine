import { Test, TestingModule } from '@nestjs/testing';
import { CampaignSetupController } from './campaign-setup.controller';
import { CampaignSetupService } from './campaign-setup.service';

describe('CampaignSetupController', () => {
  let campaignSetupController: CampaignSetupController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CampaignSetupController],
      providers: [CampaignSetupService],
    }).compile();

    campaignSetupController = app.get<CampaignSetupController>(
      CampaignSetupController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(campaignSetupController.getHello()).toBe('Hello World!');
    });
  });
});
