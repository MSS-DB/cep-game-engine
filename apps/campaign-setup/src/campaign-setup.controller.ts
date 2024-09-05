import { Controller, Get } from '@nestjs/common';
import { CampaignSetupService } from './campaign-setup.service';

@Controller()
export class CampaignSetupController {
  constructor(private readonly campaignSetupService: CampaignSetupService) {}

  @Get()
  getHello(): string {
    return this.campaignSetupService.getHello();
  }
}
