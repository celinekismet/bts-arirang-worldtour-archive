import { Injectable } from '@nestjs/common';
import { CreateHitTweetDto } from './dto/create-hit-tweet.dto.js';
import { UpdateHitTweetDto } from './dto/update-hit-tweet.dto.js';

@Injectable()
export class HitTweetsService {
  create(createHitTweetDto: CreateHitTweetDto) {
    return 'This action adds a new hitTweet';
  }

  findAll() {
    return `This action returns all hitTweets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hitTweet`;
  }

  update(id: number, updateHitTweetDto: UpdateHitTweetDto) {
    return `This action updates a #${id} hitTweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} hitTweet`;
  }
}
