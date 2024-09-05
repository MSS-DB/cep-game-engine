import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { GameEngineService } from './game-engine.service';
import { Game } from './models/game.model';
import { CreateGameRequest } from './dtos/create-game.dto';
import { UpdateGameRequest } from './dtos/update-game.dto';
import { GameInstance } from './models/game_instance.model';
import { UpdateGameInstanceRequest } from './dtos/update-game-instance.dto';
import { CreateGameInstanceRequest } from './dtos/create-game-instance.dto';
import { AllExceptionsFilter } from './game-engine.exceptions.filter';

@Controller('game')
@UseFilters(AllExceptionsFilter)
export class GameEngineController {
  constructor(private readonly gameEngineService: GameEngineService) {}

  @Get()
  getGames(@Body() filter): Promise<Game[]> {
    return this.gameEngineService.getGames(filter);
  }

  @Post()
  createGame(@Body() createGameRequest: CreateGameRequest): Promise<Game> {
    return this.gameEngineService.createGame({
      name: createGameRequest.name,
      description: createGameRequest.description,
      isActive: createGameRequest.isActive,
    } as Game);
  }

  @Put()
  updateGame(
    @Param('id') id: string,
    @Body() updateGameRequest: UpdateGameRequest,
  ) {
    this.gameEngineService.updateGame(id, updateGameRequest);
  }

  @Post('/instance')
  createGameInstance(
    @Body() createGameInstanceRequest: CreateGameInstanceRequest,
  ): Promise<GameInstance> {
    return this.gameEngineService.createGameInstance({
      gameCode: createGameInstanceRequest.gameCode,
      requestor: createGameInstanceRequest.requestor,
      country: createGameInstanceRequest.country,
      startDate: createGameInstanceRequest.startDate,
      endDate: createGameInstanceRequest.endDate,
    } as GameInstance);
  }

  @Put('/instance/:id')
  updateGameInstance(
    @Param('id') id: string,
    @Body() updateGameInstanceRequest: UpdateGameInstanceRequest,
  ) {
    this.gameEngineService.updateGameInstance(id, updateGameInstanceRequest);
  }
}
