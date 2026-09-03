import { Test, TestingModule } from '@nestjs/testing';
import { SurpriseSongController } from './surprise-song.controller.js';
import { SurpriseSongService } from './surprise-song.service.js';

describe('SurpriseSongController', () => {
  let controller: SurpriseSongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurpriseSongController],
      providers: [SurpriseSongService],
    }).compile();

    controller = module.get<SurpriseSongController>(SurpriseSongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
