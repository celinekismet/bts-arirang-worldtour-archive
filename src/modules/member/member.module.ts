import { Module } from '@nestjs/common';
import { MemberService } from './member.service.js';
import { MemberController } from './member.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService]
})
export class MemberModule {}
