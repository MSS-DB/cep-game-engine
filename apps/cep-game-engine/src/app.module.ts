import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampaignSetupModule } from '../../campaign-setup/src/campaign-setup.module';
import { GameEngineModule } from '../../game-engine/src/game-engine.module';
import { RewardRedemptionModule } from '../../reward-redemption/src/reward-redemption.module';
import { TaskModule } from '../../task/src/task.module';
import { TransactionLogModule } from '../../transaction-log/src/transaction-log.module';

@Module({
  imports: [
    CampaignSetupModule,
    GameEngineModule,
    RewardRedemptionModule,
    TaskModule,
    TransactionLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
