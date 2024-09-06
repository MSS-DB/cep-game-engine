import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';
import {
  GamePaginateRequest,
  UpdateGameInstanceRequest,
  UpdateGameRequest,
} from './dtos';

@Injectable()
export class GameEngineService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private readonly gameRepository: typeof Game,
    @Inject('GAME_INSTANCE_REPOSITORY')
    private readonly gameInstanceRepository: typeof GameInstance,
  ) {}

  async getGame(filter: Partial<Game>): Promise<Game> {
    const game = await this.gameRepository.findOne<Game>({ where: filter });
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    return game;
  }

  async getGames(filter: Partial<GamePaginateRequest>): Promise<Game[]> {
    return await this.gameRepository.findAll<Game>(filter);
  }

  async createGame(createGameDto: Omit<Game, 'id'>): Promise<Game> {
    return await this.gameRepository.create(createGameDto);
  }

  async updateGame(
    id: number,
    updateGameRequest: UpdateGameRequest,
  ): Promise<void> {
    const existingGame = await this.getGame({ id });

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
    return await this.gameInstanceRepository.create(createGameInstanceDto);
  }

  async updateGameInstance(
    id: number,
    updateGameInstanceRequest: UpdateGameInstanceRequest,
  ): Promise<void> {
    const existingGameInstance = await this.getGameInstance({ id });

    if (!existingGameInstance) {
      throw new NotFoundException('Game Instance not found');
    }

    await this.gameInstanceRepository.update(updateGameInstanceRequest, {
      where: { id },
    });
  }
}
