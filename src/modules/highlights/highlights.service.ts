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
     const { mediaIds, eventId, tweetIds, memberIds, ...highlightFields} = createHighlightDto;

     const highlight = this.highlightsRepository.create({
      ...highlightFields,
      media: mediaIds?.map((id) => ({ id })),
      event: { eventId },
      tweets: tweetIds?.map((id) => ({hitTweetId: id})),
      members: memberIds?.map((id) => ({memberId: id}))
     })
     return this.highlightsRepository.save(highlight);
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

  async update(id: number, updateHighlightDto: UpdateHighlightDto): Promise<Highlight | null> {
    const { mediaIds, eventId, tweetIds, memberIds, ...highlightFields} = updateHighlightDto;

    await this.highlightsRepository.update( id, {
      ...highlightFields,
      ...(eventId !== undefined && { event : { eventId }})
    })
    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.highlightsRepository.delete(id).then(() => undefined)
  }
}
