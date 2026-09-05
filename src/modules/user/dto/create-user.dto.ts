import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole } from '../../../config/config/enum/UserRole.enum.js';

/**
 * DTO used to create a user.
 */
export class CreateUserDto {

  /** The email of the user. */
  @IsEmail()
  email: string;

  /** The plain-text password (will be hashed before storage). */
  @IsString()
  @MinLength(8)
  password: string;

  /** The display name of the user. */
  @IsString()
  name: string;

  /** The role of the user. */
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}