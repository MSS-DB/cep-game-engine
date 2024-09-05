import { Module } from '@nestjs/common';
import { InterServiceService } from './inter-service.service';

@Module({
  providers: [InterServiceService],
  exports: [InterServiceService],
})
export class InterServiceModule {}
