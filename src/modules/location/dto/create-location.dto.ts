import { IsArray, IsInt } from "class-validator";
import { IsString } from "class-validator";

export class CreateLocationDto {
    
    /** The country where the location is situated. */
    @IsString()
    country: string;

    /** The city where the location is situated. */
    @IsString()
    city: string;

    /** The venue where the location is situated. */
    @IsString()
    venue: string;

    /** The address of the location. */
    @IsString()
    address: string;

    /** The events associated with the location. */
    @IsInt({ each: true })
    @IsArray()
    eventIds: number[];

    /** The surprise songs associated with the location. */
    @IsInt({ each: true })
    @IsArray()
    surpriseSongsIds: number[];
}
