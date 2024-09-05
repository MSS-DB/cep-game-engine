import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { GameInstance } from './game_instance.model';
import { Game } from './game.model';

@Table
export class GameInstanceResult extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => GameInstance)
  @Column
  gameInstanceCode: number;

  @ForeignKey(() => Game)
  @Column
  gameCode: string;

  // Following ISO 3166-1 alpha-3
  @Column({ type: DataType.STRING(3) })
  country: string;

  // UTC Format
  @Column
  gameStartDate: Date;

  // UTC Format
  @Column
  gameEndDate: Date;

  @Column
  gamerIdType: string;

  @Column
  result: string;

  @Column
  comment: string;
}
