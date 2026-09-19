import { Test, TestingModule } from '@nestjs/testing';
import { OutfitsController } from './outfits.controller.js';
import { OutfitsService } from './outfits.service.js';
import { vi } from 'vitest';

describe('OutfitsController', () => {
  let controller: OutfitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutfitsController],
      providers: [
        {
          provide: OutfitsService,
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

    controller = module.get<OutfitsController>(OutfitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
