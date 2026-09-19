import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service.js';
import { User } from './entities/user.entity.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { createMockRepository } from '../../test/mock-repository.helper.js';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
