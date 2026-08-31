import { Module } from '@nestjs/common';
import { HightlightsService } from './hightlights.service.js';
import { HightlightsController } from './hightlights.controller.js';

@Module({
  controllers: [HightlightsController],
  providers: [HightlightsService],
})
export class HightlightsModule {}
