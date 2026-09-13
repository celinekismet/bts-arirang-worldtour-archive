import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SurpriseSongService } from './surprise-song.service.js';
import { CreateSurpriseSongDto } from './dto/create-surprise-song.dto.js';
import { UpdateSurpriseSongDto } from './dto/update-surprise-song.dto.js';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard.js';

@Controller('surprise-song')
export class SurpriseSongController {
  constructor(private readonly surpriseSongService: SurpriseSongService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSurpriseSongDto: CreateSurpriseSongDto) {
    return this.surpriseSongService.create(createSurpriseSongDto);
  }

  @Get()
  findAll() {
    return this.surpriseSongService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surpriseSongService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurpriseSongDto: UpdateSurpriseSongDto) {
    return this.surpriseSongService.update(+id, updateSurpriseSongDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surpriseSongService.remove(+id);
  }
}
