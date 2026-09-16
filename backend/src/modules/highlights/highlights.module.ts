import { Module } from '@nestjs/common';
import { HighlightsService } from './highlights.service.js';
import { HighlightsController } from './highlights.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Highlight } from './entities/highlight.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Highlight])],
  controllers: [HighlightsController],
  providers: [HighlightsService],
  exports: [HighlightsService]
})
export class HighlightsModule {}
