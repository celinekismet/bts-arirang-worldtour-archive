import { Test, TestingModule } from '@nestjs/testing';
import { HitTweetsService } from './hit-tweets.service.js';

describe('HitTweetsService', () => {
  let service: HitTweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HitTweetsService],
    }).compile();

    service = module.get<HitTweetsService>(HitTweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
