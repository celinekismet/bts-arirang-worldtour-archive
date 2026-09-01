import type { EventMedia } from "../../media/entities/event-media.entity";
import type { Outfits } from "../../outfits/entities/outfits.entity";
import type { Highlights } from "../../highlights/entities/highlights.entity";
import type { HitTweets } from "../../hit-tweets/entities/hit-tweets.entity";
import { PrimaryGeneratedColumn } from "typeorm";
import { IsString, IsDateString, IsArray } from "class-validator";

export class CreateEventDto {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    id: string;

    @IsDateString()
    date: Date;

    @IsString()
    country: string;

    @IsString()
    city: string;

    @IsString()
    venue: string;

    @IsArray()
    setlist: string[];

    @IsArray()
    surpriseSongs: string[];

    @IsArray()
    media: EventMedia[];

    @IsArray()
    outfits: Outfits[];

    @IsArray()
    highlights: Highlights[];

    @IsArray()
    hitTweets: HitTweets[];
}
