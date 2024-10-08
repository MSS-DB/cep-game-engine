import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';
import { GamePaginateRequest } from './dtos';
import { v4 as uuidv4 } from 'uuid';
import { GameInstanceResult } from './models/game_instance_result.model';

/**
 * TODO: JSDoc coverage
 */
@Injectable()
export class GameEngineService {
  private readonly logger = new Logger(GameEngineService.name);

  constructor(
    @Inject('GAME_REPOSITORY')
    private readonly gameRepository: typeof Game,
    @Inject('GAME_INSTANCE_REPOSITORY')
    private readonly gameInstanceRepository: typeof GameInstance,
    @Inject('GAME_INSTANCE_RESULT_REPOSITORY')
    private readonly gameInstanceResultRepository: typeof GameInstanceResult,
  ) {}

  async getGame(id: number): Promise<Game> {
    const game = await this.gameRepository.findOne<Game>({ where: { id } });

    if (!game) {
      throw new NotFoundException('Game not found');
    }

    return game;
  }

  async getGame(id: number): Promise<Game> {
    const game = await this.gameRepository.findOne<Game>({ where: { id } });

    if (!game) {
      throw new NotFoundException('Game not found');
    }

    return game;
  }

  async getGames(filter: Partial<GamePaginateRequest>): Promise<Game[]> {
    return await this.gameRepository.findAll<Game>(filter);
  }

  async createGame(createGameDto: Omit<Game, 'id'>): Promise<Game> {
    // TODO: Before creation, generate UUID for GameCode column in GameInstance database.
    createGameDto.code = uuidv4();

    return await this.gameRepository.create(createGameDto);
  }

  async updateGame(id: number, updateGameRequest: Game): Promise<void> {
    const existingGame = await this.getGame(id);

    if (!existingGame) {
      throw new NotFoundException('Game not found');
    }

    await this.gameRepository.update(updateGameRequest, { where: { id } });
  }

  async getGameInstance(filter: Partial<GameInstance>): Promise<GameInstance> {
    const gameInstance =
      await this.gameInstanceRepository.findOne<GameInstance>({
        where: filter,
      });
    if (!gameInstance) {
      throw new NotFoundException('GameInstance not found');
    }
    return gameInstance;
  }

  async createGameInstance(
    createGameInstanceDto: Omit<GameInstance, 'id'>,
  ): Promise<GameInstance> {
    // TODO: Before creation, generate UUID for Code column in GameInstance database.
    createGameInstanceDto.code = uuidv4();

    return await this.gameInstanceRepository.create(createGameInstanceDto);
  }

  async updateGameInstance(
    id: number,
    updateGameInstanceRequest: GameInstance,
  ): Promise<void> {
    const existingGameInstance = await this.getGameInstance({ id });

    if (!existingGameInstance) {
      throw new NotFoundException('Game Instance not found');
    }

    await this.gameInstanceRepository.update(updateGameInstanceRequest, {
      where: { id },
    });
  }

  // TODO: Create Game Instance Results functions here
  // Before creation, get UUID GameInstanceCode column in GameInstance database.

  async createGameInstanceResult(
    createGameInstanceResultDto: Omit<GameInstanceResult, 'id'>,
  ): Promise<GameInstanceResult> {
    // Validate gameInstanceCode from gameInstance database.
    const existingGameInstance = this.getGameInstance()

    // Validate gameCode from games database.

    return await this.gameInstanceResultRepository.create(
      createGameInstanceResultDto,
    );
  }

  async getGameInstanceResult(id: number): Promise<GameInstanceResult> {
    const gameInstanceResult = await this.gameInstanceResultRepository.findOne<GameInstanceResult>({ where: { id } });

    if (!gameInstanceResult) {
      throw new NotFoundException('Game Instance Result not found');
    }

    return gameInstanceResult;
  }

  async updateGameInstanceResult(id: number, updateGameInstanceResultRequest: GameInstanceResult): Promise<void> {
    const existingGameInstanceResult = await this.getGameInstanceResult(id);

    if (!existingGameInstanceResult) {
      throw new NotFoundException('Game Instance Result not found');
    }

    await this.gameInstanceResultRepository.update(updateGameInstanceResultRequest, { where: { id } });
  }

}
