import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginateRequest {
  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
    required: false,
    default: 1,
  })
  @IsInt()
  @Type(() => Number)
  offset?: number;

  @ApiPropertyOptional({
    description: 'Number of items per page',
    example: 10,
    required: false,
    default: 10,
  })
  @IsInt()
  @Type(() => Number)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Filter object to filter the results',
    example: { isActive: true },
    required: false,
    type: Object,
  })
  where?: Record<string, any>;
}
