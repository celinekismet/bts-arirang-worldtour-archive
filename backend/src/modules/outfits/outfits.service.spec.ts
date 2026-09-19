import { Test, TestingModule } from '@nestjs/testing';
import { OutfitsService } from './outfits.service.js';
import { Outfit } from './entities/outfit.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { vi } from 'vitest';

describe('OutfitsService', () => {
  let service: OutfitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OutfitsService,
              {
                 provide: getRepositoryToken(Outfit),
                 useValue: createMockRepository(),
              },
            ],
    }).compile();

    service = module.get<OutfitsService>(OutfitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
