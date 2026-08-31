import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HightlightsService } from './hightlights.service.js';
import { CreateHightlightDto } from './dto/create-hightlight.dto.js';
import { UpdateHightlightDto } from './dto/update-hightlight.dto.js';

@Controller('hightlights')
export class HightlightsController {
  constructor(private readonly hightlightsService: HightlightsService) {}

  @Post()
  create(@Body() createHightlightDto: CreateHightlightDto) {
    return this.hightlightsService.create(createHightlightDto);
  }

  @Get()
  findAll() {
    return this.hightlightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hightlightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHightlightDto: UpdateHightlightDto) {
    return this.hightlightsService.update(+id, updateHightlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hightlightsService.remove(+id);
  }
}
