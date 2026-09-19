import { Test, TestingModule } from '@nestjs/testing';
import { HighlightsService } from './highlights.service.js';
import { Highlight } from './entities/highlight.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';

describe('HighlightsService', () => {
  let service: HighlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HighlightsService,
              {
                provide: getRepositoryToken(Highlight),
                useValue: createMockRepository(),
              },
            ],
    }).compile();

    service = module.get<HighlightsService>(HighlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
