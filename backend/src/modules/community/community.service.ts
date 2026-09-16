import { Injectable } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto.js';
import { UpdateCommunityDto } from './dto/update-community.dto.js';
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
    return this.communityRepository.find();
  }
  
  findOne(id: number): Promise<Community | null> {
    return this.communityRepository.findOneBy({ communityId: id });
  }

  async update(id: number, updateCommunityDto: UpdateCommunityDto): Promise<Community | null> {
    await this.communityRepository.update( id, updateCommunityDto)
      return this.findOne(id);
  }

  async remove(id: number):Promise<void> {
    await this.communityRepository.delete(id);
  }
}
