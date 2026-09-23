import { EventDto } from "./event.model";
import { LocationDto } from "./location.model";

export interface SurpriseSongDto {
    surpriseSongId: number;
    album: string[];
    title: string;
    releaseDate: Date;
    events: EventDto[];
    locations: LocationDto
}