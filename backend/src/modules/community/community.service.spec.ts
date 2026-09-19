import { Test, TestingModule } from '@nestjs/testing';
import { CommunityService } from './community.service.js';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { Community } from './entities/community.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CommunityService', () => {
  let service: CommunityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommunityService,
      {
        provide: getRepositoryToken(Community),
        useValue: createMockRepository(),
      }],
    }).compile();

    service = module.get<CommunityService>(CommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
