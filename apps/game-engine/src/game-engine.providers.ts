import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';
import { GameInstanceResult } from './models/game_instance_result.model';

export const gameEngineProviders = [
  {
    provide: 'GAME_REPOSITORY',
    useValue: Game,
  },
  {
    provide: 'GAME_INSTANCE_REPOSITORY',
    useValue: GameInstance,
  },
  {
    provide: 'GAME_INSTANCE_RESULT_REPOSITORY',
    useValue: GameInstanceResult,
  },
];
