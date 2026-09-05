import { IsArray, IsEnum, IsInt, IsOptional, IsString, IsUrl } from 'class-validator';
import { MediaType } from '../../../config/config/enum/MediaType.enum.js';

/**
 * DTO used to create a media item.
 */
export class CreateMediaDto {

  /** The URL of the media. */
  @IsUrl()
  @IsOptional()
  url?: string;

  /** The type of the media. */
  @IsEnum(MediaType)
  type: MediaType;

  /** The description of the media. */
  @IsString()
  description: string;

  /** The credit information for the media. */
  @IsString()
  credit: string;

  /** A note about the media. */
  @IsString()
  @IsOptional()
  note?: string;

  /** The ID of the event associated with the media. */
  @IsInt()
  eventId: number;

  /** The IDs of highlights associated with the media. */
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  highlightIds?: number[];

  /** The IDs of members shown in the media. */
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  memberIds?: number[];
}