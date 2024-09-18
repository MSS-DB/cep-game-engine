import { Test, TestingModule } from '@nestjs/testing';
import { GameEngineController } from './game-engine.controller';
import { GameEngineService } from './game-engine.service';
import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';
import {
  CreateGameInstanceRequest,
  CreateGameRequest,
  GamePaginateRequest,
  UpdateGameInstanceRequest,
  UpdateGameRequest,
} from './dtos';

describe('GameEngineController', () => {
  let gameEngineController: GameEngineController;
  let gameEngineService: GameEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameEngineController],
      providers: [
        {
          provide: GameEngineService,
          useValue: {
            getGame: jest.fn(),
            getGames: jest.fn(),
            createGame: jest.fn(),
            updateGame: jest.fn(),
            getGameInstance: jest.fn(),
            createGameInstance: jest.fn(),
            updateGameInstance: jest.fn(),
          },
        },
      ],
    }).compile();

    gameEngineController =
      module.get<GameEngineController>(GameEngineController);
    gameEngineService = module.get<GameEngineService>(GameEngineService);
  });

  describe('getGame', () => {
    it('should return a game by ID', async () => {
      const game: Game = {
        id: 1,
        name: 'Game 1',
        description: 'Description 1',
        isActive: true,
        code: 'GAME1',
        createdAt: new Date(),
        updatedAt: new Date(),
      } as Game;

      jest.spyOn(gameEngineService, 'getGame').mockResolvedValue(game);

      expect(await gameEngineController.getGame(1)).toBe(game);
    });
  });

  describe('getGames', () => {
    it('should return an array of games', async () => {
      const games: Game[] = [
        {
          id: 1,
          name: 'Game 1',
          description: 'Description 1',
          isActive: true,
          code: 'GAME1',
          createdAt: new Date(),
          updatedAt: new Date(),
        } as Game,
        {
          id: 2,
          name: 'Game 2',
          description: 'Description 2',
          isActive: false,
          code: 'GAME2',
          createdAt: new Date(),
          updatedAt: new Date(),
        } as Game,
      ];

      jest.spyOn(gameEngineService, 'getGames').mockResolvedValue(games);

      const filter = { where: { isActive: true } } as GamePaginateRequest;
      expect(await gameEngineController.getGames(filter)).toBe(games);
    });
  });

  describe('createGame', () => {
    it('should create and return a game', async () => {
      const createGameRequest: CreateGameRequest = {
        name: 'New Game',
        description: 'New Description',
        isActive: true,
      };

      const game: Game = {
        id: 1,
        code: 'NEWGAME',
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'New Game',
        description: 'New Description',
        isActive: true,
      } as Game;

      jest.spyOn(gameEngineService, 'createGame').mockResolvedValue(game);

      expect(await gameEngineController.createGame(createGameRequest)).toBe(
        game,
      );
    });
  });

  describe('updateGame', () => {
    it('should call updateGame with the correct parameters', async () => {
      const updateGameRequest: UpdateGameRequest = {
        name: 'Updated Game',
        description: 'Updated Description',
        isActive: false,
        gameCode: 'ABC123',
      };

      const gameId = 1;

      jest.spyOn(gameEngineService, 'updateGame').mockResolvedValue(undefined);

      await gameEngineController.updateGame(gameId, updateGameRequest);

      expect(gameEngineService.updateGame).toHaveBeenCalledWith(
        gameId,
        expect.objectContaining({
          name: updateGameRequest.name,
          description: updateGameRequest.description,
          isActive: updateGameRequest.isActive,
          code: updateGameRequest.gameCode, // This should match the mapping
        }),
      );
    });
  });

  describe('createGameInstance', () => {
    it('should create and return a game instance', async () => {
      const createGameInstanceRequest: CreateGameInstanceRequest = {
        gameCode: 'ABC123',
        requestor: 'User1',
        country: 'US',
        startDate: new Date(),
        endDate: new Date(),
      };

      const gameInstance: GameInstance = {
        id: 1,
        code: createGameInstanceRequest.gameCode,
        gameCode: 1, // Assuming gameId is resolved during instance creation
        createdAt: new Date(),
        updatedAt: new Date(),
        requestor: 'User1',
        country: 'US',
        startDate: new Date(),
        endDate: new Date(),
      } as GameInstance;

      jest
        .spyOn(gameEngineService, 'createGameInstance')
        .mockResolvedValue(gameInstance);

      expect(
        await gameEngineController.createGameInstance(
          createGameInstanceRequest,
        ),
      ).toBe(gameInstance);
    });
  });

  describe('updateGameInstance', () => {
    it('should call updateGameInstance with the correct parameters', async () => {
      const updateGameInstanceRequest: UpdateGameInstanceRequest = {
        gameInstanceCode: 'DEF456',
        requestor: 'User2',
        startDate: new Date(),
        endDate: new Date(),
      };

      const instanceId = 1;

      jest
        .spyOn(gameEngineService, 'updateGameInstance')
        .mockResolvedValue(undefined);

      await gameEngineController.updateGameInstance(
        instanceId,
        updateGameInstanceRequest,
      );

      expect(gameEngineService.updateGameInstance).toHaveBeenCalledWith(
        instanceId,
        expect.objectContaining({
          code: updateGameInstanceRequest.gameInstanceCode,
          startDate: updateGameInstanceRequest.startDate,
          endDate: updateGameInstanceRequest.endDate,
          requestor: updateGameInstanceRequest.requestor,
        }),
      );
    });
  });
});
