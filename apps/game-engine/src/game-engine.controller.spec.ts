import { Test, TestingModule } from '@nestjs/testing';
import { GameEngineController } from './game-engine.controller';
import { GameEngineService } from './game-engine.service';

describe('GameEngineController', () => {
  let gameEngineController: GameEngineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GameEngineController],
      providers: [GameEngineService],
    }).compile();

    gameEngineController = app.get<GameEngineController>(GameEngineController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gameEngineController.getHello()).toBe('Hello World!');
    });
  });
});
