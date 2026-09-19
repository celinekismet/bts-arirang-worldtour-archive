import { Test, TestingModule } from '@nestjs/testing';
import { SurpriseSongController } from './surprise-song.controller.js';
import { SurpriseSongService } from './surprise-song.service.js';
import { vi } from 'vitest';

describe('SurpriseSongController', () => {
  let controller: SurpriseSongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurpriseSongController],
      providers: [
        {
          provide: SurpriseSongService,
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

    controller = module.get<SurpriseSongController>(SurpriseSongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
