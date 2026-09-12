import { Module } from '@nestjs/common';
import { LocationService } from './location.service.js';
import { LocationController } from './location.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  controllers: [LocationController],
  providers: [LocationService],
  exports: [LocationService]
})
export class LocationModule {}
