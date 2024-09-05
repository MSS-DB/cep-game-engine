import { Test, TestingModule } from '@nestjs/testing';
import { InterServiceService } from './inter-service.service';

describe('InterServiceService', () => {
  let service: InterServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterServiceService],
    }).compile();

    service = module.get<InterServiceService>(InterServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
