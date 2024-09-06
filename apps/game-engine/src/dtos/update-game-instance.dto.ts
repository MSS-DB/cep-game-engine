import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, Length } from 'class-validator';

export class UpdateGameInstanceRequest {
  @ApiProperty({
    description: 'Unique code of the game instance',
    example: 'GAMEINST123',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Game instance code must be a string' })
  @Length(3, 20, {
    message: 'Game instance code must be between 3 and 20 characters',
  })
  gameInstanceCode?: string;

  @ApiProperty({
    description: 'Identifier of the requestor',
    example: 'user123',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Requestor must be a string' })
  @Length(3, 50, {
    message: 'Requestor identifier must be between 3 and 50 characters',
  })
  requestor?: string;

  @ApiProperty({
    description: 'Start date of the game instance in UTC format',
    example: '2024-09-15T00:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString(
    {},
    {
      message: 'Start date must be a valid ISO 8601 date string in UTC format',
    },
  )
  startDate?: Date;

  @ApiProperty({
    description: 'End date of the game instance in UTC format',
    example: '2024-09-20T00:00:00Z',
    required: false,
  })
  @IsOptional()
  @IsDateString(
    {},
    { message: 'End date must be a valid ISO 8601 date string in UTC format' },
  )
  endDate?: Date;
}
