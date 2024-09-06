import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Game } from './game.model';

@Table({
  tableName: 'game_instances', // specify table name
  timestamps: true, // enable createdAt and updatedAt fields
})
export class GameInstance extends Model<GameInstance> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true, // Ensure each instance has a unique code
    validate: {
      len: [3, 20], // Example length validation
    },
  })
  code: string;

  @ForeignKey(() => Game)
  @Column({
    type: DataType.INTEGER, // Foreign key should match the primary key type in Game
    allowNull: false,
  })
  gameId: number; // Rename to match the primary key of the related model

  // Following ISO 3166-1 alpha-3
  @Column({
    type: DataType.STRING(3),
    allowNull: false,
  })
  country: string;

  // UTC Format
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startDate: Date;

  // UTC Format
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  endDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 50], // Example length validation
    },
  })
  requestor: string;

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

  @Index('idx_game_instance_country')
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  indexedCountry: string;
}
