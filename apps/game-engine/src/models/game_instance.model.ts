import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Game } from './game.model';

@Table
export class GameInstance extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  code: string;

  @ForeignKey(() => Game)
  @Column
  gameCode: string;

  // Following ISO 3166-1 alpha-3
  @Column({ type: DataType.STRING(3) })
  country: string;

  // UTC Format
  @Column
  startDate: Date;

  // UTC Format
  @Column
  endDate: Date;

  @Column
  requestor: string;
}
