import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { vi } from 'vitest';
import { Location } from './entities/location.entity.js';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationService,
              {
                provide: getRepositoryToken(Location),
                useValue: createMockRepository(),
              },
            ],
    }).compile();

    service = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
