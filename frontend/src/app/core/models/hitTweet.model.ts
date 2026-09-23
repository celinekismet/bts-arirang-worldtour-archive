import { EventDto } from "./event.model";
import { HighlightDto } from "./highlight.model";

export interface HitTweetDto {
    hitTweetId: number;
    content: string;
    note: string;
    event: EventDto;
    highlight: HighlightDto;
}