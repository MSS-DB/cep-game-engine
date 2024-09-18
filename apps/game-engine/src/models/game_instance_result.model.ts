import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Index,
} from 'sequelize-typescript';
import { GameInstance } from './game_instance.model';
import { Game } from './game.model';

@Table({
  tableName: 'game_instance_results',
})
export class GameInstanceResult extends Model<GameInstanceResult> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gameInstanceCode: number; // Use the code of GameInstance for foreign key

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gameCode: number; // Use the code of Game for foreign key

  @Column({
    type: DataType.STRING(3),
    allowNull: false,
    validate: {
      len: [3, 3], // Validate length for ISO 3166-1 alpha-3 code
    },
  })
  @Index('idx_game_instance_result_country')
  country: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  gameStartDate: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  gameEndDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 20], // Example length validation
    },
  })
  gamerIdType: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [1, 20], // Example length validation
    },
  })
  result: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 255], // Example length validation
    },
  })
  comment: string;
}
