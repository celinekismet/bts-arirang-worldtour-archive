import { Injectable } from '@nestjs/common';
import { CreateHitTweetDto } from './dto/create-hit-tweet.dto.js';
import { UpdateHitTweetDto } from './dto/update-hit-tweet.dto.js';
import { HitTweet } from './entities/hit-tweet.entity.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HitTweetsService {

  constructor(
    @InjectRepository(HitTweet)
    private readonly hitTweetsRepository: Repository<HitTweet>,
  ){}

  create(createHitTweetDto: CreateHitTweetDto): Promise<HitTweet> {
    const { eventId, highlightId, ...hitTweetFields} = createHitTweetDto;
    
    const hitTweet = this.hitTweetsRepository.create({ 
      ...hitTweetFields,
      event: { eventId },
      highlight: {highlightId } 
    });
    return this.hitTweetsRepository.save(hitTweet);
  }

  findAll(): Promise<HitTweet[]> {
    return this.hitTweetsRepository.find();
  }

  findOne(id: number): Promise<HitTweet | null> {
    return this.hitTweetsRepository.findOne({ 
      where: {hitTweetId: id},
      relations: {
        event: true,
        highlight: true
      }
    });
  }

  async update(id: number, updateHitTweetDto: UpdateHitTweetDto): Promise<HitTweet | null> {
    const { eventId, highlightId, ...hitTweetFields} = updateHitTweetDto
  
    await this.hitTweetsRepository.update(id, {
      ...hitTweetFields,
      ...(eventId  !== undefined && { event: { eventId }}),
      ...( highlightId !== undefined && { highlight : { highlightId }} )
    })

  return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.hitTweetsRepository.delete(id).then(() => undefined)
  }
}
