import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameRequest {
  @ApiProperty({
    description: 'Name of the game',
    example: 'Super Fun Game',
    maxLength: 50,
    minLength: 3,
  })
  @IsNotEmpty({ message: 'Game name is required' })
  @IsString({ message: 'Game name must be a string' })
  @Length(3, 50, { message: 'Game name must be between 3 and 50 characters' })
  name: string;

  @ApiProperty({
    description: 'Description of the game',
    example: 'This is a really fun game where you do amazing things.',
    maxLength: 255,
    minLength: 10,
  })
  @IsNotEmpty({ message: 'Game description is required' })
  @IsString({ message: 'Game description must be a string' })
  @Length(10, 255, {
    message: 'Game description must be between 10 and 255 characters',
  })
  description: string;

  @ApiProperty({
    description: 'Indicates if the game is active',
    example: true,
  })
  @IsNotEmpty({ message: 'Game status is required' })
  @IsBoolean({ message: 'Game status must be a boolean' })
  isActive: boolean;
}
