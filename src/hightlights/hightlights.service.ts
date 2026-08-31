import { Injectable } from '@nestjs/common';
import { CreateHightlightDto } from './dto/create-hightlight.dto.js';
import { UpdateHightlightDto } from './dto/update-hightlight.dto.js';

@Injectable()
export class HightlightsService {
  create(createHightlightDto: CreateHightlightDto) {
    return 'This action adds a new hightlight';
  }

  findAll() {
    return `This action returns all hightlights`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hightlight`;
  }

  update(id: number, updateHightlightDto: UpdateHightlightDto) {
    return `This action updates a #${id} hightlight`;
  }

  remove(id: number) {
    return `This action removes a #${id} hightlight`;
  }
}
