import { Inject, Injectable } from '@nestjs/common';
import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';
import { UpdateGameRequest } from './dtos/update-game.dto';
import { UpdateGameInstanceRequest } from './dtos/update-game-instance.dto';

@Injectable()
export class GameEngineService {
  constructor(
    @Inject('GAME_REPOSITORY')
    private gameRepository: typeof Game,
    @Inject('GAME_INSTANCE_REPOSITORY')
    private gameInstanceRepository: typeof GameInstance,
  ) {}

  async getGame(filter: any): Promise<Game> {
    return await this.gameRepository.findOne<Game>({ where: { ...filter } });
  }

  async getGames(filter: any): Promise<Game[]> {
    return await this.gameRepository.findAll<Game>({ where: { ...filter } });
  }

  async createGame(game: Game): Promise<Game> {
    return await this.gameRepository.create({ ...game });
  }

  async updateGame(id: string, updateGameRequest: UpdateGameRequest) {
    const existing: Game = await this.getGame({ id });

    const update = { ...existing, ...updateGameRequest };

    await this.gameRepository.update(update, { where: { id } });
  }

  async getGameInstance(filter: any): Promise<GameInstance> {
    return await this.gameInstanceRepository.findOne<GameInstance>({
      where: { ...filter },
    });
  }

  async createGameInstance(gameInstance: GameInstance): Promise<GameInstance> {
    return await this.gameInstanceRepository.create({ ...gameInstance });
  }

  async updateGameInstance(
    id: string,
    updateGameInstanceRequest: UpdateGameInstanceRequest,
  ) {
    const existing: GameInstance = await this.getGameInstance({ id });

    const update = { ...existing, ...updateGameInstanceRequest };

    await this.gameInstanceRepository.update(update, { where: { id } });
  }
}
