import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HighlightsService } from './highlights.service.js';
import { CreateHighlightDto } from './dto/create-highlight.dto.js';
import { UpdateHighlightDto } from './dto/update-highlight.dto.js';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  create(@Body() createHighlightDto: CreateHighlightDto) {
    return this.highlightsService.create(createHighlightDto);
  }

  @Get()
  findAll() {
    return this.highlightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.highlightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHighlightDto: UpdateHighlightDto) {
    return this.highlightsService.update(+id, updateHighlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.highlightsService.remove(+id);
  }
}
