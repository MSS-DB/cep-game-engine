import { Module } from '@nestjs/common';
import { RewardRedemptionController } from './reward-redemption.controller';
import { RewardRedemptionService } from './reward-redemption.service';

@Module({
  imports: [],
  controllers: [RewardRedemptionController],
  providers: [RewardRedemptionService],
})
export class RewardRedemptionModule {}
