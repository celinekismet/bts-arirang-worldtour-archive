import { Injectable } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto.js';
import { UpdateCommunityDto } from './dto/update-community.dto.js';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Community } from './entities/community.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class CommunityService {

  constructor(
    @InjectRepository(Community)
    private readonly communityRepository: Repository<Community>
  ){}

  create(createCommunityDto: CreateCommunityDto): Promise<Community> {
    const community = this.communityRepository.create(createCommunityDto);
    return this.communityRepository.save(community);
  }

  findAll() {
    return `This action returns all community`;
  }
  findOne(id: number) {
    return `This action returns a #${id} community`;
  }

  update(id: number, updateCommunityDto: UpdateCommunityDto) {
    return `This action updates a #${id} community`;
  }

  remove(id: number) {
    return `This action removes a #${id} community`;
  }
}
