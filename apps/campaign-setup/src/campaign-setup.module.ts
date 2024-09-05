import { Module } from '@nestjs/common';
import { CampaignSetupController } from './campaign-setup.controller';
import { CampaignSetupService } from './campaign-setup.service';

@Module({
  imports: [],
  controllers: [CampaignSetupController],
  providers: [CampaignSetupService],
})
export class CampaignSetupModule {}
