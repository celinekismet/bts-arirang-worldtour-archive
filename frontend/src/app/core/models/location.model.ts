import { EventDto } from "./event.model";
import { SurpriseSongDto } from "./surpriseSongs.model";

export interface LocationDto {
    locationId: number;
    country: string;
    city: string;
    venue: string;
    address: string;
    events: EventDto[];
    surpriseSongs: SurpriseSongDto[];
}
