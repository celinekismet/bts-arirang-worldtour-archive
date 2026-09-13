import { Module } from '@nestjs/common';
import { OutfitsService } from './outfits.service.js';
import { OutfitsController } from './outfits.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Outfit } from './entities/outfit.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Outfit])],
  controllers: [OutfitsController],
  providers: [OutfitsService],
  exports: [OutfitsService]
})
export class OutfitsModule {}
