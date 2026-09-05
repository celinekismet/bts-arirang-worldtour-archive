import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user= await this.userService.findByEmailWithPassword(dto.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches){
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.userId, password: user.password, role: user.role };

    return {
      accessToken: this.jwtService.sign(payload),
      user: { userId: user.userId, email: user.email, name: user.name, role: user.role },
      }
    };


}
