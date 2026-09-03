import { Test, TestingModule } from '@nestjs/testing';
import { OutfitsController } from './outfits.controller.js';
import { OutfitsService } from './outfits.service.js';

describe('OutfitsController', () => {
  let controller: OutfitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutfitsController],
      providers: [OutfitsService],
    }).compile();

    controller = module.get<OutfitsController>(OutfitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
