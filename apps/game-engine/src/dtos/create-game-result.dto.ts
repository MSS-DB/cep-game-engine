import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateGameResultRequest {
  @ApiProperty({
    description: 'Unique code of the game instance',
    example: 'GAMEINST123',
    maxLength: 20,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Game instance code is required' })
  @IsString({ message: 'Game instance code must be a string' })
  @Length(3, 20, {
    message: 'Game instance code must be between 3 and 20 characters',
  })
  gameInstanceCode: string;

  @ApiProperty({
    description: 'Start date of the game in UTC format',
    example: '2024-09-15T00:00:00Z',
  })
  @IsNotEmpty({ message: 'Game start date is required' })
  @IsDateString(
    {},
    {
      message: 'Start date must be a valid ISO 8601 date string in UTC format',
    },
  )
  gameStartDate: Date;

  @ApiProperty({
    description: 'End date of the game in UTC format',
    example: '2024-09-20T00:00:00Z',
  })
  @IsNotEmpty({ message: 'Game end date is required' })
  @IsDateString(
    {},
    { message: 'End date must be a valid ISO 8601 date string in UTC format' },
  )
  gameEndDate: Date;

  @ApiProperty({
    description: 'Identifier of the gamer',
    example: 'gamer123',
    maxLength: 50,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Gamer ID is required' })
  @IsString({ message: 'Gamer ID must be a string' })
  @Length(3, 50, { message: 'Gamer ID must be between 3 and 50 characters' })
  gamerId: string;

  @ApiProperty({
    description: 'Type of gamer ID (e.g., username, email, etc.)',
    example: 'username',
    maxLength: 20,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Gamer ID type is required' })
  @IsString({ message: 'Gamer ID type must be a string' })
  @Length(3, 20, {
    message: 'Gamer ID type must be between 3 and 20 characters',
  })
  gamerIdType: string;

  @ApiProperty({
    description: 'Result of the game (e.g., win, lose, draw)',
    example: 'win',
    maxLength: 20,
    minLength: 1,
  })
  @IsNotEmpty({ message: 'Result is required' })
  @IsString({ message: 'Result must be a string' })
  @Length(1, 20, { message: 'Result must be between 1 and 20 characters' })
  result: string;

  @ApiProperty({
    description: 'Additional comments about the game result',
    example: 'Great game!',
    maxLength: 255,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Comment is required' })
  @IsString({ message: 'Comment must be a string' })
  @Length(3, 255, { message: 'Comment must be between 3 and 255 characters' })
  comment: string;
}
