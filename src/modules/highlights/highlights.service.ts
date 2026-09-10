import { Injectable } from '@nestjs/common';
import { CreateHighlightDto } from './dto/create-highlight.dto.js';
import { UpdateHighlightDto } from './dto/update-highlight.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Highlight } from './entities/highlight.entity.js';

@Injectable()
export class HighlightsService {

  constructor(
    @InjectRepository(Highlight)
    private readonly highlightsRepository: Repository<Highlight>
   ){}
  create(createHighlightDto: CreateHighlightDto) {
    return 'This action adds a new highlight';
  }

  findAll():Promise<Highlight[]> {
    return this.highlightsRepository.find();
  }

  findOne(id: number): Promise<Highlight | null> {
    return this.highlightsRepository.findOne({
      where: { highlightId: id},
      relations: {
      media: true,
      event: true,
      tweets: true,
      members: true,
    },
    })
  }

  update(id: number, updateHighlightDto: UpdateHighlightDto) {
    return `This action updates a #${id} highlight`;
  }

  remove(id: number) {
    return `This action removes a #${id} highlight`;
  }
}
