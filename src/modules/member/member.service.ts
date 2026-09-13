import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto.js';
import { UpdateMemberDto } from './dto/update-member.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {

  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>
  ){}

  create(createMemberDto: CreateMemberDto): Promise<Member> {
    const { highlightIds, mediaIds, ...memberFields } = createMemberDto;

    const member = this.memberRepository.create({
      ...memberFields,
      highlights: highlightIds?.map((id) => ({ highlightId: id })),
      media: mediaIds?.map((id) => ({id}))
    })

    return this.memberRepository.save(member);
  }

  findAll(): Promise<Member[]> {
    return this.memberRepository.find();
  }

  findOne(id: number): Promise<Member | null> {
    return this.memberRepository.findOneBy({ memberId: id })
  }

  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member | null> {
    const { highlightIds, mediaIds, ...memberFields } = updateMemberDto;
    
    await this.memberRepository.update(id, {
      ...memberFields
    })

    if (highlightIds || mediaIds){
      const member = await this.memberRepository.findOneBy({memberId: id});
      if (member) {
        if (highlightIds) {
          member.highlights = highlightIds.map((highlightId) => ({ highlightId})) as any;
        }
        if (mediaIds) {
          member.media = mediaIds.map((mediaId) => ({ id: mediaId})) as any;
        }
        await this.memberRepository.save(member);
      }
    }

    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.memberRepository.delete(id).then(() => undefined);
  }
}
