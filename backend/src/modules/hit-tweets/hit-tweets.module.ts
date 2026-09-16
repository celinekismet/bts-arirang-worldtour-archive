import { Module } from '@nestjs/common';
import { HitTweetsService } from './hit-tweets.service.js';
import { HitTweetsController } from './hit-tweets.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HitTweet } from './entities/hit-tweet.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([HitTweet])],
  controllers: [HitTweetsController],
  providers: [HitTweetsService],
  exports: [HitTweetsService]
})
export class HitTweetsModule {}
