import { Test, TestingModule } from '@nestjs/testing';
import { SurpriseSongService } from './surprise-song.service.js';

describe('SurpriseSongService', () => {
  let service: SurpriseSongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurpriseSongService],
    }).compile();

    service = module.get<SurpriseSongService>(SurpriseSongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
