import { Test, TestingModule } from '@nestjs/testing';
import { HitTweetsController } from './hit-tweets.controller.js';
import { HitTweetsService } from './hit-tweets.service.js';

describe('HitTweetsController', () => {
  let controller: HitTweetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HitTweetsController],
      providers: [HitTweetsService],
    }).compile();

    controller = module.get<HitTweetsController>(HitTweetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
