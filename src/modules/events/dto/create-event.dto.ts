import { HitTweet } from "../../hit-tweets/entities/hit-tweet.entity.js";
import { Media } from "../../media/entities/media.entity.js";
import { Outfit } from "../../outfits/entities/outfit.entity.js";
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
    media: Media[];

    @IsArray()
    outfits: Outfit[];

    @IsArray()
    highlights: Highlight[];

    @IsArray()
    hitTweets: HitTweet[];
}
