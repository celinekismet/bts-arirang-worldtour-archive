import { Module } from '@nestjs/common';
import { HighlightsService } from './highlights.service.js';
import { HighlightsController } from './highlights.controller.js';

@Module({
  controllers: [HighlightsController],
  providers: [HighlightsService],
})
export class HighlightsModule {}
