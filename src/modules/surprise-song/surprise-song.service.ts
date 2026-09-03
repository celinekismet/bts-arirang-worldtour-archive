import { Injectable } from '@nestjs/common';
import { CreateSurpriseSongDto } from './dto/create-surprise-song.dto.js';
import { UpdateSurpriseSongDto } from './dto/update-surprise-song.dto.js';

@Injectable()
export class SurpriseSongService {
  create(createSurpriseSongDto: CreateSurpriseSongDto) {
    return 'This action adds a new surpriseSong';
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
