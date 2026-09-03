import { Module } from '@nestjs/common';
import { OutfitsService } from './outfits.service.js';
import { OutfitsController } from './outfits.controller.js';

@Module({
  controllers: [OutfitsController],
  providers: [OutfitsService],
})
export class OutfitsModule {}
