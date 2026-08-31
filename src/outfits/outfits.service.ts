import { Injectable } from '@nestjs/common';
import { CreateOutfitDto } from './dto/create-outfit.dto.js';
import { UpdateOutfitDto } from './dto/update-outfit.dto.js';

@Injectable()
export class OutfitsService {
  create(createOutfitDto: CreateOutfitDto) {
    return 'This action adds a new outfit';
  }

  findAll() {
    return `This action returns all outfits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outfit`;
  }

  update(id: number, updateOutfitDto: UpdateOutfitDto) {
    return `This action updates a #${id} outfit`;
  }

  remove(id: number) {
    return `This action removes a #${id} outfit`;
  }
}
