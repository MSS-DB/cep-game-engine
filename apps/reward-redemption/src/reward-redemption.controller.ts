import { Controller, Get } from '@nestjs/common';
import { RewardRedemptionService } from './reward-redemption.service';

@Controller()
export class RewardRedemptionController {
  constructor(
    private readonly rewardRedemptionService: RewardRedemptionService,
  ) {}

  @Get()
  getHello(): string {
    return this.rewardRedemptionService.getHello();
  }
}
