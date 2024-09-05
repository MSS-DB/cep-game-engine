import { Controller, Get } from '@nestjs/common';
import { GameEngineService } from './game-engine.service';

@Controller()
export class GameEngineController {
  constructor(private readonly gameEngineService: GameEngineService) {}

  @Get()
  getHello(): string {
    return this.gameEngineService.getHello();
  }
}
