import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './modules/user/user.module.js';
import { AuthModule } from './auth/auth.module.js';
import { EventsModule } from './modules/events/events.module.js';
import { CommunityModule } from './modules/community/community.module.js';
import { HighlightsModule } from './modules/highlights/highlights.module.js';
import { HitTweetsModule } from './modules/hit-tweets/hit-tweets.module.js';
import { LocationModule } from './modules/location/location.module.js';
import { MediaModule } from './modules/media/media.module.js';
import { MemberModule } from './modules/member/member.module.js';
import { OutfitsModule } from './modules/outfits/outfits.module.js';
import { SurpriseSongModule } from './modules/surprise-song/surprise-song.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './database.config.js';
import { ConfigModule, ConfigService } from '@nestjs/config';

// Import explicite de toutes les entités
import { Event } from './modules/events/entities/event.entity.js';
import { Media } from './modules/media/entities/media.entity.js';
import { HitTweet } from './modules/hit-tweets/entities/hit-tweet.entity.js';
import { Outfit } from './modules/outfits/entities/outfit.entity.js';
import { Highlight } from './modules/highlights/entities/highlight.entity.js';
import { Community } from './modules/community/entities/community.entity.js';
import { Location } from './modules/location/entities/location.entity.js';
import { Member } from './modules/member/entities/member.entity.js';
import { SurpriseSong } from './modules/surprise-song/entities/surprise-song.entity.js';
import { User } from './modules/user/entities/user.entity.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('database.host'),
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.database'),
        entities: [Event, Media, HitTweet, Outfit, Highlight, Community, Location, Member, SurpriseSong, User],
        synchronize: process.env.NODE_ENV !== 'production',
      }),
    }),

    EventsModule,
    MediaModule,
    HitTweetsModule,
    OutfitsModule,
    HighlightsModule,
    CommunityModule,
    LocationModule,
    MemberModule,
    SurpriseSongModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}