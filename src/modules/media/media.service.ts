import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto.js';
import { UpdateMediaDto } from './dto/update-media.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity.js';

@Injectable()
export class MediaService {

  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>
  ){}

  create(createMediaDto: CreateMediaDto): Promise<Media> {
    const {eventId, highlightIds, memberIds, ...mediaFields } = createMediaDto;
    
    const media = this.mediaRepository.create({
      ...mediaFields,
      event: { eventId },
      highlights: highlightIds?.map((id) => ({highlightId: id})),
      members: memberIds?.map((id) => ({ memberId: id}))
    })

    return this.mediaRepository.save(media)
  }

  findAll(): Promise<Media[]> {
    return this.mediaRepository.find();
  }

  findOne(id: number): Promise<Media | null> {
    return this.mediaRepository.findOne({ 
      where: {id: id},
      relations: {
        event: true,
        highlights: true,
        members: true,
      },
    });
  }

  async update(id: number, updateMediaDto: UpdateMediaDto): Promise<Media | null> {
    const {eventId, highlightIds, memberIds, ...mediaFields } = updateMediaDto;

    const media = await this.mediaRepository.update(id, {
      ...mediaFields,
      ...(eventId  !== undefined && { event: { eventId }}),
      ...( highlightIds !== undefined && { highlight : { highlightIds }} )
    })

    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.mediaRepository.delete(id).then(() => undefined );
  }
}
