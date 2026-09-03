import { Module } from '@nestjs/common';
import { MemberService } from './member.service.js';
import { MemberController } from './member.controller.js';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
