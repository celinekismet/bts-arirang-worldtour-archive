import { Test, TestingModule } from '@nestjs/testing';
import { HitTweetsService } from './hit-tweets.service.js';
import { HitTweet } from './entities/hit-tweet.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';

describe('HitTweetsService', () => {
  let service: HitTweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HitTweetsService,
              {
                provide: getRepositoryToken(HitTweet),
                useValue: createMockRepository(),
              },],
    }).compile();

    service = module.get<HitTweetsService>(HitTweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
