import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { EventsModule } from './events/events.module.js';
import { MediaModule } from './media/media.module.js';
import { HitTweetsModule } from './hit-tweets/hit-tweets.module.js';
import { OutfitsModule } from './outfits/outfits.module.js';
import { HighlightsModule } from './highlights/highlights.module.js';
import { CommunityModule } from './community/community.module.js';

@Module({
  imports: [
    EventsModule, 
    MediaModule, 
    HitTweetsModule, 
    OutfitsModule, 
    HighlightsModule, 
    CommunityModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
