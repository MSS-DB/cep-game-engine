import {
  Column,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'games',
})
export class Game extends Model<Game> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true, // ensure that code is unique
    validate: {
      len: [3, 20], // validate length of the code
    },
  })
  @Index('idx_game_code')
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
  @Index('idx_game_name')
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [10, 255], // validate length of the description
    },
  })
  description: string;
}
