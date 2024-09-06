import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsISO31661Alpha3,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateGameInstanceRequest {
  @ApiProperty({
    description: 'Unique code of the game',
    example: 'GAME123',
    maxLength: 20,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Game code is required' })
  @IsString({ message: 'Game code must be a string' })
  @Length(3, 20, { message: 'Game code must be between 3 and 20 characters' })
  gameCode: string;

  @ApiProperty({
    description:
      'Country where the game instance is created, using ISO 3166-1 alpha-3 code',
    example: 'USA',
  })
  @IsNotEmpty({ message: 'Country is required' })
  @IsISO31661Alpha3({ message: 'Invalid ISO 3166-1 alpha-3 country code' })
  country: string;

  @ApiProperty({
    description: 'Start date of the game instance in UTC format',
    example: '2024-09-15T00:00:00Z',
  })
  @IsNotEmpty({ message: 'Start date is required' })
  @IsDateString(
    {},
    {
      message: 'Start date must be a valid ISO 8601 date string in UTC format',
    },
  )
  startDate: Date;

  @ApiProperty({
    description: 'End date of the game instance in UTC format',
    example: '2024-09-20T00:00:00Z',
  })
  @IsNotEmpty({ message: 'End date is required' })
  @IsDateString(
    {},
    { message: 'End date must be a valid ISO 8601 date string in UTC format' },
  )
  endDate: Date;

  @ApiProperty({
    description: 'Identifier of the requestor',
    example: 'user123',
    maxLength: 50,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Requestor is required' })
  @IsString({ message: 'Requestor must be a string' })
  @Length(3, 50, {
    message: 'Requestor identifier must be between 3 and 50 characters',
  })
  requestor: string;
}
