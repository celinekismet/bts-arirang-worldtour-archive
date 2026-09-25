import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventsService } from './events.service.js';
import { Event } from './entities/event.entity.js';
import { Outfit } from '../outfits/entities/outfit.entity.js';
import { SurpriseSong } from '../surprise-song/entities/surprise-song.entity.js';
import { Location } from '../location/entities/location.entity.js';
import { createMockRepository } from '../../test/mock-repository.helper.js';

describe('EventsService', () => {
  let service: EventsService;
  let eventRepository: ReturnType<typeof createMockRepository>;
  let locationRepository: ReturnType<typeof createMockRepository>;
  let outfitRepository: ReturnType<typeof createMockRepository>;
  let surpriseSongRepository: ReturnType<typeof createMockRepository>;

  beforeEach(async () => {
    eventRepository = createMockRepository();
    locationRepository = createMockRepository();
    outfitRepository = createMockRepository();
    surpriseSongRepository = createMockRepository();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EventsService,
        {
          provide: getRepositoryToken(Event),
          useValue: eventRepository,
        },
        {
          provide: getRepositoryToken(Location),
          useValue: locationRepository,
        },
        {
          provide: getRepositoryToken(Outfit),
          useValue: outfitRepository,
        },
        {
          provide: getRepositoryToken(SurpriseSong),
          useValue: surpriseSongRepository,
        },
      ],
    }).compile();

    service = module.get<EventsService>(EventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});