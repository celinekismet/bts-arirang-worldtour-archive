import { Module } from '@nestjs/common';
import { EventsService } from './events.service.js';
import { EventsController } from './events.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), ],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
