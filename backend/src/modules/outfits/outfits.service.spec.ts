import { Test, TestingModule } from '@nestjs/testing';
import { OutfitsService } from './outfits.service.js';

describe('OutfitsService', () => {
  let service: OutfitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutfitsService],
    }).compile();

    service = module.get<OutfitsService>(OutfitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
