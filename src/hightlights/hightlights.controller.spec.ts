import { Test, TestingModule } from '@nestjs/testing';
import { HightlightsController } from './hightlights.controller.js';
import { HightlightsService } from './hightlights.service.js';

describe('HightlightsController', () => {
  let controller: HightlightsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HightlightsController],
      providers: [HightlightsService],
    }).compile();

    controller = module.get<HightlightsController>(HightlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
