import { Test, TestingModule } from '@nestjs/testing';
import { HightlightsService } from './hightlights.service.js';

describe('HightlightsService', () => {
  let service: HightlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HightlightsService],
    }).compile();

    service = module.get<HightlightsService>(HightlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
