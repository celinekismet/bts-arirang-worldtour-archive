import { EventDto } from "./event.model";
import { MemberDto } from "./member.model";

export interface OutfitsDto {
    outfitId: number;
    name: string;
    description: string;
    designer: string;
    events: EventDto[];
    member: MemberDto;
}