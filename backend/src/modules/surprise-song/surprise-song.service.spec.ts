import { Test, TestingModule } from '@nestjs/testing';
import { SurpriseSongService } from './surprise-song.service.js';
import { SurpriseSong } from './entities/surprise-song.entity.js';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { vi } from 'vitest';

describe('SurpriseSongService', () => {
  let service: SurpriseSongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SurpriseSongService,
              {
                provide: getRepositoryToken(SurpriseSong),
                useValue: createMockRepository(),
              },],
    }).compile();

    service = module.get<SurpriseSongService>(SurpriseSongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
