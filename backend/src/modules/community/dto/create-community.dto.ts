import { IsArray, IsEnum, IsString, IsUrl } from 'class-validator';
import { CommunityCategories } from '../../../config/config/enum/CommunityCategories.enum.js';

/**
 * DTO used to create a community entry.
 */
export class CreateCommunityDto {

  /** The name of the community. */
  @IsString()
  name: string;

  /** The description of the community. */
  @IsString()
  description: string;

  /** The category of the community. */
  @IsEnum(CommunityCategories)
  category: CommunityCategories;

  /** The platforms where the community exists. */
  @IsArray()
  @IsString({ each: true })
  platforms: string[];

  /** The links related to the community. */
  @IsArray()
  @IsUrl({}, { each: true })
  links: string[];
}