import { Module } from '@nestjs/common';
import { SurpriseSongService } from './surprise-song.service.js';
import { SurpriseSongController } from './surprise-song.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurpriseSong } from './entities/surprise-song.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([SurpriseSong])],
  controllers: [SurpriseSongController],
  providers: [SurpriseSongService],
  exports: [SurpriseSongService]
})
export class SurpriseSongModule {}
