import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto.js';
import type { EventMedia } from "../../media/entities/event-media.entity";
import type { Outfits } from "../../outfits/entities/outfits.entity";
import type { Highlights } from "../../highlights/entities/highlights.entity";
import type { HitTweets } from "../../hit-tweets/entities/hit-tweets.entity";

export class UpdateEventDto extends PartialType(CreateEventDto) {
    id: string;

    date?: string;

    country?: string;

    city?: string;

    venue?: string;

    setlist?: string[];

    surpriseSongs?: string[];

    media?: EventMedia[];

    outfits?: Outfits[];

    highlights?: Highlights[];

    hitTweets?: HitTweets[];
}
