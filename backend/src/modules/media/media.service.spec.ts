import { Test, TestingModule } from '@nestjs/testing';
import { MediaService } from './media.service.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Media } from './entities/media.entity.js';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { vi } from 'vitest';

describe('MediaService', () => {
  let service: MediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaService,
              {
                provide: getRepositoryToken(Media),
                useValue: createMockRepository(),
              },
            ],
    }).compile();

    service = module.get<MediaService>(MediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
