import { Module } from '@nestjs/common';
import { GameEngineController } from './game-engine.controller';
import { GameEngineService } from './game-engine.service';

@Module({
  imports: [],
  controllers: [GameEngineController],
  providers: [GameEngineService],
})
export class GameEngineModule {}
