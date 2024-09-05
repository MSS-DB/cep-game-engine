import { Game } from './models/game.model';
import { GameInstance } from './models/game_instance.model';

export const gameEngineProviders = [
  {
    provide: 'GAME_REPOSITORY',
    useValue: Game,
  },
  {
    provide: 'GAME_INSTANCE_REPOSITORY',
    useValue: GameInstance,
  },
];
