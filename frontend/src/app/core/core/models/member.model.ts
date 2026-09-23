import { HighlightDto } from "./highlight.model";
import { MediaDto } from "./media.model";
import { OutfitsDto } from "./outfit.model";

export interface MemberDto {
    memberId: number;
    name: string;
    stageName: string;
    outfit: OutfitsDto[];
    highlights: HighlightDto[];
    media: MediaDto[];
}