import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Index,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'games', // specify table name
  timestamps: true, // enable createdAt and updatedAt fields
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

  @Index('idx_game_name')
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  indexName: string;
}
