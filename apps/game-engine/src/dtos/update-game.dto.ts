import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class UpdateGameRequest {
  @ApiProperty({
    description: 'Name of the game',
    example: 'Super Fun Game',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Game name must be a string' })
  @Length(3, 50, { message: 'Game name must be between 3 and 50 characters' })
  name?: string;

  @ApiProperty({
    description: 'Description of the game',
    example: 'This is a really fun game where you do amazing things.',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Game description must be a string' })
  @Length(10, 255, { message: 'Game description must be between 10 and 255 characters' })
  description?: string;

  @ApiProperty({
    description: 'Unique code of the game',
    example: 'GAME123',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Game code must be a string' })
  @Length(3, 20, { message: 'Game code must be between 3 and 20 characters' })
  gameCode?: string;

  @ApiProperty({
    description: 'Indicates if the game is active',
    example: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean({ message: 'Game status must be a boolean' })
  isActive?: boolean;
}
