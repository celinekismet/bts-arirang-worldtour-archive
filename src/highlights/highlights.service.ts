import { Injectable } from '@nestjs/common';
import { CreateHighlightDto } from './dto/create-highlight.dto.js';
import { UpdateHighlightDto } from './dto/update-highlight.dto.js';

@Injectable()
export class HighlightsService {
  create(createHighlightDto: CreateHighlightDto) {
    return 'This action adds a new highlight';
  }

  findAll() {
    return `This action returns all highlights`;
  }

  findOne(id: number) {
    return `This action returns a #${id} highlight`;
  }

  update(id: number, updateHighlightDto: UpdateHighlightDto) {
    return `This action updates a #${id} highlight`;
  }

  remove(id: number) {
    return `This action removes a #${id} highlight`;
  }
}
