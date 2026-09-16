import { IsArray, IsDateString, IsInt, IsOptional, IsString } from "class-validator";

export class CreateSurpriseSongDto {

    @IsString()
    @IsArray()
    album: string[];
    
    @IsString()
    title: string;

    @IsDateString()
    releaseDate: Date;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    eventIds?: number[];

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    locationIds?: number[];
}