import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto.js';
import { UpdateLocationDto } from './dto/update-location.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity.js';
import { Repository } from 'typeorm';


@Injectable()
export class LocationService {

  constructor(
    @InjectRepository(Location)
    private readonly locationsRepository: Repository<Location>
  ){}

  create(createLocationDto: CreateLocationDto): Promise<Location> {
    const { eventIds, surpriseSongsIds, ...locationFields} = createLocationDto;

    const location = this.locationsRepository.create({
      ...locationFields,
      events: eventIds?.map((id) => ({ eventId: id})),
      surpriseSongs: surpriseSongsIds?.map((id) => ({surpriseSongId: id}))
    });
    return this.locationsRepository.save(location)
  }

  findAll(): Promise<Location[]> {
    return this.locationsRepository.find();
  }

  findOne(id: number): Promise<Location | null> {
    return this.locationsRepository.findOne( { 
      where: {locationId: id},
      relations: {
        events: true,
        surpriseSongs: true
      } });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location | null> {
    const { eventIds, surpriseSongsIds, ...locationFields } = updateLocationDto;

    const location = await this.locationsRepository.update(id, {
      ...locationFields,
      ...(surpriseSongsIds !== undefined && { surpriseSong: { surpriseSongId: id}})
    })

   return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.locationsRepository.delete(id).then(() => undefined);
  }
}
