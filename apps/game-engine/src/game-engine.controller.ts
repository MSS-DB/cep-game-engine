import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
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
import { AllExceptionsFilter } from './game-engine.exceptions.filter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('game-engine')
@Controller('games')
@UseFilters(AllExceptionsFilter)
export class GameEngineController {
  private readonly logger = new Logger(GameEngineController.name);

  constructor(private readonly gameEngineService: GameEngineService) {}

  @Get(':id')
  getGame(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    return this.gameEngineService.getGame(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all games with optional filtering' })
  @ApiResponse({ status: 200, description: 'List of games', type: [Game] })
  getGames(@Query() filter: GamePaginateRequest): Promise<Game[]> {
    return this.gameEngineService.getGames(filter);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new game' })
  @ApiResponse({ status: 201, description: 'The created game', type: Game })
  createGame(@Body() createGameRequest: CreateGameRequest): Promise<Game> {
    return this.gameEngineService.createGame({
      name: createGameRequest.name,
      description: createGameRequest.description,
      isActive: createGameRequest.isActive,
    } as Game);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing game by ID' })
  @ApiResponse({ status: 204, description: 'The game has been updated' })
  updateGame(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameRequest: UpdateGameRequest,
  ): Promise<void> {
    return this.gameEngineService.updateGame(id, updateGameRequest);
  }

  @Post('instances')
  @ApiOperation({ summary: 'Create a new game instance' })
  @ApiResponse({
    status: 201,
    description: 'The created game instance',
    type: GameInstance,
  })
  createGameInstance(
    @Body() createGameInstanceRequest: CreateGameInstanceRequest,
  ): Promise<GameInstance> {
    return this.gameEngineService.createGameInstance({
      code: createGameInstanceRequest.gameCode,
      requestor: createGameInstanceRequest.requestor,
      country: createGameInstanceRequest.country,
      startDate: createGameInstanceRequest.startDate,
      endDate: createGameInstanceRequest.endDate,
    } as GameInstance);
  }

  @Put('instances/:id')
  @ApiOperation({ summary: 'Update an existing game instance by ID' })
  @ApiResponse({
    status: 204,
    description: 'The game instance has been updated',
  })
  updateGameInstance(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameInstanceRequest: UpdateGameInstanceRequest,
  ): Promise<void> {
    return this.gameEngineService.updateGameInstance(
      id,
      updateGameInstanceRequest,
    );
  }
}
