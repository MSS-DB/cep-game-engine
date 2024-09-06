import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GamePaginateRequest {
  @ApiPropertyOptional({ example: 0, default: 0 })
  page?: number;
  @ApiPropertyOptional({ example: 20, default: 20 })
  size?: number;
}
