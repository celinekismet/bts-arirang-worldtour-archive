import { MediaType } from "../enum/MediaType.enum";
import { EventDto } from "./event.model";
import { HighlightDto } from "./highlight.model";
import { MemberDto } from "./member.model";

export interface MediaDto {
    id: number;
    url?: string;
    type: MediaType;
    description: string;
    credit: string;
    note?: string | null;
    event: EventDto;
    highlight?: HighlightDto[];
    members?: MemberDto[];
}