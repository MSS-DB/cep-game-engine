import {
  AutoIncrement,
  Column,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'games', // specify table name
})
export class Game extends Model<Game> {
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
    unique: true, // ensure that code is unique
    validate: {
      len: [3, 20], // validate length of the code
    },
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true, // default value for isActive
  })
  isActive: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 50], // validate length of the name
    },
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [10, 255], // validate length of the description
    },
  })
  description: string;

  @Index('idx_game_name')
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  indexName: string;
}
