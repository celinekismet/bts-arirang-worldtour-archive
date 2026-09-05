import { IsArray, IsInt } from "class-validator";
import { IsString } from "class-validator/types/decorator/typechecker/IsString.js";

export class CreateHighlightDto {

       highlightId: number;
    
        /** The title of the highlight. */
        @IsString()
        title: string;
    
        /** The description of the highlight. */
        @IsString()
        description: string;
    
        /** The media associated with the highlight. */
        @IsInt({ each: true })
        @IsArray()
        mediaIds: number[];
    
        /** The event associated with the highlight. */
        @IsInt()
        eventId: number;

        /** The hit tweets associated with the highlight. */
        @IsInt({ each: true })
        @IsArray()
        tweetIds: number[];

        /** The member associated with the highlight. This field is optional and can be null. */
        @IsInt()
        @IsArray()
        membersIds: number[];
    
}
