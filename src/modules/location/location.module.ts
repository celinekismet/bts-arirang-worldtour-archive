import { Module } from '@nestjs/common';
import { LocationService } from './location.service.js';
import { LocationController } from './location.controller.js';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
