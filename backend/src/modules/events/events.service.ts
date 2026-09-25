import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto.js';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { Event } from './entities/event.entity.js';
import { Location } from '../location/entities/location.entity.js';
import { Outfit } from '../outfits/entities/outfit.entity.js';
import { SurpriseSong } from '../surprise-song/entities/surprise-song.entity.js';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>,
    @InjectRepository(Outfit)
    private readonly outfitsRepository: Repository<Outfit>,
    @InjectRepository(SurpriseSong)
    private readonly surpriseSongsRepository: Repository<SurpriseSong>,
  ) {}

  private async validateRelations(locationId?: number, outfitIds?: number[], surpriseSongIds?: number[]) {
    if (locationId !== undefined) {
      const location = await this.locationsRepository.findOneBy({ locationId });
      if (!location) {
        throw new BadRequestException(`Location ${locationId} does not exist.`);
      }
    }

    if (outfitIds && outfitIds.length > 0) {
      const uniqueOutfitIds = [...new Set(outfitIds)];
      const existingOutfits = await this.outfitsRepository.findBy({ outfitId: In(uniqueOutfitIds) });
      const existingIds = new Set(existingOutfits.map((outfit) => outfit.outfitId));
      const missingIds = uniqueOutfitIds.filter((id) => !existingIds.has(id));

      if (missingIds.length > 0) {
        throw new BadRequestException(`Outfit IDs do not exist: ${missingIds.join(', ')}`);
      }
    }

    if (surpriseSongIds && surpriseSongIds.length > 0) {
      const uniqueSurpriseSongIds = [...new Set(surpriseSongIds)];
      const existingSurpriseSongs = await this.surpriseSongsRepository.findBy({ surpriseSongId: In(uniqueSurpriseSongIds) });
      const existingIds = new Set(existingSurpriseSongs.map((song) => song.surpriseSongId));
      const missingIds = uniqueSurpriseSongIds.filter((id) => !existingIds.has(id));

      if (missingIds.length > 0) {
        throw new BadRequestException(`Surprise song IDs do not exist: ${missingIds.join(', ')}`);
      }
    }
  }

  async create(dto: CreateEventDto): Promise<Event> {
    const { locationId, outfitIds, surpriseSongIds, ...eventFields } = dto;

    await this.validateRelations(locationId, outfitIds, surpriseSongIds);

    const event = this.eventsRepository.create({
        ...eventFields,
        location: { locationId },
        outfits: outfitIds?.map((id) => ({outfitId: id})),
        surpriseSongs: surpriseSongIds?.map((id) => ({surpriseSongId: id})),
      });
    return this.eventsRepository.save(event);
  }


  findAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  findOne(id: number): Promise<Event | null> {
    return this.eventsRepository.findOneBy({ eventId: id });
  }

  async update(id: number, dto: UpdateEventDto): Promise<Event | null> {
    const { locationId, outfitIds, surpriseSongIds, ...eventFields } = dto;

    await this.validateRelations(locationId, outfitIds, surpriseSongIds);

    await this.eventsRepository.update(id, {
      ...eventFields,
      ...( locationId !== undefined && { location: { locationId }}),
      });

    if (outfitIds || surpriseSongIds) {
      const event = await this.eventsRepository.findOneBy({ eventId: id});
      if (event){
        if(outfitIds){
          event.outfits = outfitIds.map((outfitId) => ({outfitId}) as any)
        }
        if(surpriseSongIds){
          event.surpriseSongs = surpriseSongIds.map((surpriseSongId) => ({surpriseSongId}) as any)
        }
        await this.eventsRepository.save(event);
      }
    }
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.eventsRepository.delete(id).then(() => undefined);
  }
}
