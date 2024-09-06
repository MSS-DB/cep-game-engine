import { Sequelize } from 'sequelize-typescript';
import { Game } from '../../../apps/game-engine/src/models/game.model';
import { GameInstance } from '../../../apps/game-engine/src/models/game_instance.model';
import { GameInstanceResult } from '../../../apps/game-engine/src/models/game_instance_result.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'cep-game-engine',
      });
      sequelize.addModels([Game, GameInstance, GameInstanceResult]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
