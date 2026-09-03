import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HitTweetsService } from './hit-tweets.service.js';
import { CreateHitTweetDto } from './dto/create-hit-tweet.dto.js';
import { UpdateHitTweetDto } from './dto/update-hit-tweet.dto.js';

@Controller('hit-tweets')
export class HitTweetsController {
  constructor(private readonly hitTweetsService: HitTweetsService) {}

  @Post()
  create(@Body() createHitTweetDto: CreateHitTweetDto) {
    return this.hitTweetsService.create(createHitTweetDto);
  }

  @Get()
  findAll() {
    return this.hitTweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hitTweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHitTweetDto: UpdateHitTweetDto) {
    return this.hitTweetsService.update(+id, updateHitTweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hitTweetsService.remove(+id);
  }
}
