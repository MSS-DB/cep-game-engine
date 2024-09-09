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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('game-engine')
@Controller('games')
@UseFilters(AllExceptionsFilter)
export class GameEngineController {
  private readonly logger = new Logger(GameEngineController.name);

  constructor(private readonly gameEngineService: GameEngineService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a game by its ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the game to retrieve',
  })
  @ApiResponse({ status: 200, description: 'The game details', type: Game })
  @ApiResponse({ status: 404, description: 'Game not found' })
  getGame(@Param('id', ParseIntPipe) id: number): Promise<Game> {
    return this.gameEngineService.getGame(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all games with optional filtering' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    description: 'Field to sort by',
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    type: String,
    enum: ['ASC', 'DESC'],
    description: 'Order of sorting, either ASC or DESC',
  })
  @ApiResponse({ status: 200, description: 'List of games', type: [Game] })
  getGames(@Query() filter: GamePaginateRequest): Promise<Game[]> {
    return this.gameEngineService.getGames(filter);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new game' })
  @ApiBody({
    type: CreateGameRequest,
    description: 'Details of the new game to create',
  })
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
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the game to update',
  })
  @ApiBody({
    type: UpdateGameRequest,
    description: 'Updated details of the game',
  })
  @ApiResponse({ status: 200, description: 'The game has been updated' })
  @ApiResponse({ status: 404, description: 'Game not found' })
  updateGame(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameRequest: UpdateGameRequest,
  ): Promise<void> {
    return this.gameEngineService.updateGame(id, {
      name: updateGameRequest.name,
      description: updateGameRequest.description,
      isActive: updateGameRequest.isActive,
      code: updateGameRequest.gameCode,
    } as Game);
  }

  @Post('instances')
  @ApiOperation({ summary: 'Create a new game instance' })
  @ApiBody({
    type: CreateGameInstanceRequest,
    description: 'Details of the new game instance to create',
  })
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
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the game instance to update',
  })
  @ApiBody({
    type: UpdateGameInstanceRequest,
    description: 'Updated details of the game instance',
  })
  @ApiResponse({
    status: 204,
    description: 'The game instance has been updated',
  })
  @ApiResponse({ status: 404, description: 'Game instance not found' })
  updateGameInstance(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameInstanceRequest: UpdateGameInstanceRequest,
  ): Promise<void> {
    return this.gameEngineService.updateGameInstance(id, {
      code: updateGameInstanceRequest.gameInstanceCode,
      startDate: updateGameInstanceRequest.startDate,
      endDate: updateGameInstanceRequest.endDate,
      requestor: updateGameInstanceRequest.requestor,
    } as GameInstance);
  }
}
