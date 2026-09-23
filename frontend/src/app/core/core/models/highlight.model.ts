import { EventDto } from "./event.model";
import { HitTweetDto } from "./hitTweet.model";
import { MediaDto } from "./media.model";
import { MemberDto } from "./member.model";

export interface HighlightDto {
    highlightId: number;
    title: string;
    description: string;
    media: MediaDto[];
    event: EventDto;
    tweets: HitTweetDto[];
    members: MemberDto[];

}