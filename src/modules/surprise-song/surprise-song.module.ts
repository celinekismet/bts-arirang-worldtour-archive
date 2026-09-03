import { Module } from '@nestjs/common';
import { SurpriseSongService } from './surprise-song.service.js';
import { SurpriseSongController } from './surprise-song.controller.js';

@Module({
  controllers: [SurpriseSongController],
  providers: [SurpriseSongService],
})
export class SurpriseSongModule {}
