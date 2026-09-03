import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OutfitsService } from './outfits.service.js';
import { CreateOutfitDto } from './dto/create-outfit.dto.js';
import { UpdateOutfitDto } from './dto/update-outfit.dto.js';

@Controller('outfits')
export class OutfitsController {
  constructor(private readonly outfitsService: OutfitsService) {}

  @Post()
  create(@Body() createOutfitDto: CreateOutfitDto) {
    return this.outfitsService.create(createOutfitDto);
  }

  @Get()
  findAll() {
    return this.outfitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outfitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutfitDto: UpdateOutfitDto) {
    return this.outfitsService.update(+id, updateOutfitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outfitsService.remove(+id);
  }
}
