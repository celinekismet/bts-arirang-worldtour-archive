import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateEventDto } from './dto/update-event.dto.js';
import { Event } from './entities/event.entity.js';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private readonly eventsRepository: Repository<Event>,
  ) {}

  create(dto: CreateEventDto): Promise<Event> {
    const { locationId, outfitIds, surpriseSongIds, ...eventFields } = dto;
    
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
    await this.eventsRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.eventsRepository.delete(id).then(() => undefined);
  }
}
