import { Injectable } from '@nestjs/common';
import { CreateSurpriseSongDto } from './dto/create-surprise-song.dto.js';
import { UpdateSurpriseSongDto } from './dto/update-surprise-song.dto.js';
import { SurpriseSong } from './entities/surprise-song.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SurpriseSongService {

  constructor(
    @InjectRepository(SurpriseSong)
    private readonly surpriseSongRepository: Repository<SurpriseSong>
  ){}

  create(createSurpriseSongDto: CreateSurpriseSongDto): Promise<SurpriseSong> {
    const { eventIds, locationIds, ...surpriseSongFields} = createSurpriseSongDto;

    const surpriseSong = this.surpriseSongRepository.create({
      ...surpriseSongFields,
      events: eventIds?.map((id) => ({ eventId: id })), 
      locations: locationIds?.map((id) => ({ locationId: id })), 
    })

    return this.surpriseSongRepository.save(surpriseSong);
  }

  findAll(): Promise<SurpriseSong[]> {
    return this.surpriseSongRepository.find();
  }

  findOne(id: number): Promise<SurpriseSong | null> {
    return this.surpriseSongRepository.findOne({
      where: { surpriseSongId: id},
      relations: {
        events: true,
        locations: true
      }
    })
  }

  async update(id: number, updateSurpriseSongDto: UpdateSurpriseSongDto): Promise<SurpriseSong | null> {
    const { eventIds, locationIds, ...surpriseSongFields} = updateSurpriseSongDto;

    await this.surpriseSongRepository.update(id, {
      ...surpriseSongFields,
    });

    if(eventIds || locationIds) {
      const surpriseSong = await this.surpriseSongRepository.findOneBy({ surpriseSongId: id });
      if (surpriseSong){
        if (eventIds){
          surpriseSong.events = eventIds.map((eventId) => ({eventId})) as any;
        }
        if(locationIds){
          surpriseSong.locations = locationIds.map((locationId) => ({locationId})) as any;
        }
        await this.surpriseSongRepository.save(surpriseSong);
      }
    }
    return this.findOne(id);
  }


  remove(id: number): Promise<void> {
    return this.surpriseSongRepository.delete(id).then(() => undefined);
  }
}
