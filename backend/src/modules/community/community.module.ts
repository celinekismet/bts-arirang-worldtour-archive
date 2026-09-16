import { Module } from '@nestjs/common';
import { CommunityService } from './community.service.js';
import { CommunityController } from './community.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './entities/community.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Community])],
  controllers: [CommunityController],
  providers: [CommunityService],
  exports: [CommunityService]
})
export class CommunityModule {}
