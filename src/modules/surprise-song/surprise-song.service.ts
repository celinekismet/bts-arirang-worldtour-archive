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
    const { eventId, locationId, ...surpriseSongFields} = createSurpriseSongDto;

    this.surpriseSongRepository.create({
      ...surpriseSongFields,
      event: 
    })
  }

  findAll() {
    return `This action returns all surpriseSong`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surpriseSong`;
  }

  update(id: number, updateSurpriseSongDto: UpdateSurpriseSongDto) {
    return `This action updates a #${id} surpriseSong`;
  }

  remove(id: number) {
    return `This action removes a #${id} surpriseSong`;
  }
}
