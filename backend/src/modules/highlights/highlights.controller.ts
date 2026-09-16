import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HighlightsService } from './highlights.service.js';
import { CreateHighlightDto } from './dto/create-highlight.dto.js';
import { UpdateHighlightDto } from './dto/update-highlight.dto.js';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard.js';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHighlightDto: UpdateHighlightDto) {
    return this.highlightsService.update(+id, updateHighlightDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.highlightsService.remove(+id);
  }
}
