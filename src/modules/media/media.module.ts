import { Module } from '@nestjs/common';
import { MediaService } from './media.service.js';
import { MediaController } from './media.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity.js';
import { EventsModule } from '../events/events.module.js';

@Module({
  imports: [TypeOrmModule.forFeature([Media]), EventsModule],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
