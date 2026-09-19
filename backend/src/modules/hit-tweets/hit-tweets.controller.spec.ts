import { Test, TestingModule } from '@nestjs/testing';
import { HitTweetsController } from './hit-tweets.controller.js';
import { HitTweetsService } from './hit-tweets.service.js';
import { vi } from 'vitest';

describe('HitTweetsController', () => {
  let controller: HitTweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HitTweetsController],
      providers: [
        {
          provide: HitTweetsService,
          useValue: {
            create: vi.fn(),
            findAll: vi.fn(),
            findOne: vi.fn(),
            update: vi.fn(),
            remove: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HitTweetsController>(HitTweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
