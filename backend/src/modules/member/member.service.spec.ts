import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from './member.service.js';
import { Member } from './entities/member.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';
import { vi } from 'vitest';

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MemberService,
              {
                provide: getRepositoryToken(Member),
                useValue: createMockRepository(),
              },
            ],
    }).compile();

    service = module.get<MemberService>(MemberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
