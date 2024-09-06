import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  Index,
} from 'sequelize-typescript';
import { GameInstance } from './game_instance.model';
import { Game } from './game.model';

@Table({
  tableName: 'game_instance_results', // specify table name
  timestamps: true, // enable createdAt and updatedAt fields
})
export class GameInstanceResult extends Model<GameInstanceResult> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => GameInstance)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gameInstanceId: number; // Use the ID of GameInstance for foreign key

  @ForeignKey(() => Game)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gameId: number; // Use the ID of Game for foreign key

  @Column({
    type: DataType.STRING(3),
    allowNull: false,
    validate: {
      len: [3, 3], // Validate length for ISO 3166-1 alpha-3 code
    },
  })
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

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;

  @Index('idx_game_instance_result')
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  indexedField: string;
}
