import { IsEmail, IsString } from 'class-validator';

/**
 * DTO used to authenticate a user
 */
export class LoginDto {

  /** 
   * The email of the user. 
   * */
  @IsEmail()
  email: string;

  /** 
   * The plain-text password. 
   */
  @IsString()
  password: string;
}