import { Module } from '@nestjs/common';
import { EventsService } from './events.service.js';
import { EventsController } from './events.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity.js';
import { Location } from '../location/entities/location.entity.js';
import { Outfit } from '../outfits/entities/outfit.entity.js';
import { SurpriseSong } from '../surprise-song/entities/surprise-song.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Location, Outfit, SurpriseSong])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
