import { HighlightDto } from "./highlight.model";
import { HitTweetDto } from "./hitTweet.model";
import { LocationDto } from "./location.model";
import { MediaDto } from "./media.model";
import { OutfitsDto } from "./outfit.model";
import { SurpriseSongDto } from "./surpriseSongs.model";

export interface EventDto {
    eventId: number;
    date: Date;
    setlist: string[];
    ticketsSold: number;
    revenue: number;
    attendance: number;
    media: MediaDto[];
    outfits: OutfitsDto[];
    highlights: HighlightDto[];
    tweets: HitTweetDto[];
    surpriseSongs: SurpriseSongDto[];
    location: LocationDto;
}