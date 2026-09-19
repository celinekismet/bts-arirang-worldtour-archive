import { Test, TestingModule } from '@nestjs/testing';
import { HighlightsController } from './highlights.controller.js';
import { HighlightsService } from './highlights.service.js';
import { vi } from 'vitest';

describe('HighlightsController', () => {
  let controller: HighlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HighlightsController],
      providers: [
        {
          provide: HighlightsService,
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

    controller = module.get<HighlightsController>(HighlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
