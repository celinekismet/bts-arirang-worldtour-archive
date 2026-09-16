import { IsInt, IsOptional, IsString } from 'class-validator';

/**
 * DTO used to create an outfit.
 */
export class CreateOutfitDto {

  /** The name of the outfit. */
  @IsString()
  name: string;

  /** The description of the outfit. */
  @IsString()
  description: string;

  /** The designer of the outfit. */
  @IsString()
  designer: string;

  /** The ID of the member wearing the outfit. */
  @IsInt()
  @IsOptional()
  memberId?: number;
}