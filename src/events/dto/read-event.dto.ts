import { HitTweet } from "../../hit-tweets/entities/hit-tweet.entity.js";
import { Media } from "../../media/entities/media.entity.js";
import { Outfit } from "../../outfits/entities/outfit.entity.js";
import { PrimaryGeneratedColumn } from "typeorm";
import { IsArray, IsString } from "class-validator";

export class ReadEventDto {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    id: string;

    @IsString()
    date: string;

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
