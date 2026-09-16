import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

/**
 * DTO used to create a member.
 */
export class CreateMemberDto {

  /** The name of the member. */
  @IsString()
  name: string;

  /** The stage name of the member. */
  @IsString()
  stageName: string;

  /** The IDs of highlights associated with the member. */
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  highlightIds?: number[];

  /** The IDs of media associated with the member. */
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  mediaIds?: number[];
}