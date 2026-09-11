import { IsArray, IsInt, IsString, IsOptional } from "class-validator";

export class CreateHighlightDto {

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    mediaIds?: number[];

    @IsInt()
    eventId: number;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    tweetIds?: number[];

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    memberIds?: number[];
}