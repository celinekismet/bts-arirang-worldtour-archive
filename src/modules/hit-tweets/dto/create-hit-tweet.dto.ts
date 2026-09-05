import { IsInt, IsString } from "class-validator";

export class CreateHitTweetDto {

    /** The content of the tweet. */
    @IsString()
    content: string;

    /** A note about the tweet. */
    @IsString()
    note: string;

    /** The event associated with the tweet. */
    @IsInt()
    eventId: number;

    /** The highlight associated with the tweet. */
    @IsInt()
    highlightId: number;
}
