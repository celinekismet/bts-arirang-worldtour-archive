import { Injectable } from '@nestjs/common';
import { CreateOutfitDto } from './dto/create-outfit.dto.js';
import { UpdateOutfitDto } from './dto/update-outfit.dto.js';
import { Outfit } from './entities/outfit.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OutfitsService {

  constructor(
    @InjectRepository(Outfit)
    private readonly outfitRepository: Repository<Outfit>
  ){}


  create(createOutfitDto: CreateOutfitDto): Promise<Outfit> {
    const { memberId, ...outfitFields} = createOutfitDto;

    const outfit = this.outfitRepository.create({
      ...outfitFields,
      member: { memberId }
    })

    return this.outfitRepository.save(outfit);

  }

  findAll(): Promise<Outfit[]> {
    return this.outfitRepository.find();
  }

  findOne(id: number): Promise<Outfit | null> {
    return this.outfitRepository.findOneBy({ outfitId : id });
  }

  async update(id: number, updateOutfitDto: UpdateOutfitDto): Promise<Outfit | null> {
    const { memberId, ...outfitFields} = updateOutfitDto;

    const outfit = await this.outfitRepository.update( id,
      
    )

  }

  remove(id: number) {
    return `This action removes a #${id} outfit`;
  }
}
