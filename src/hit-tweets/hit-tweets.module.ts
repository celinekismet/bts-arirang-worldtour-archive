import { Module } from '@nestjs/common';
import { HitTweetsService } from './hit-tweets.service.js';
import { HitTweetsController } from './hit-tweets.controller.js';

@Module({
  controllers: [HitTweetsController],
  providers: [HitTweetsService],
})
export class HitTweetsModule {}
