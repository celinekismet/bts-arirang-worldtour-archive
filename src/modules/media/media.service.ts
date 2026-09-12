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
    private readonly mediaReposityory: Repository<Media>
  ){}

  create(createMediaDto: CreateMediaDto): Promise<Media> {
    const {eventId, highlightIds, memberIds, ...mediaFields } = createMediaDto;
    
    const media = this.mediaReposityory.create({
      ...mediaFields,
      event: { eventId },
      highlights: highlightIds?.map((id) => ({highlightId: id})),
      members: memberIds?.map((id) => ({ memberId: id}))
    })

    return this.mediaReposityory.save(media)
  }

  findAll(): Promise<Media[]> {
    return this.mediaReposityory.find();
  }

  findOne(id: number): Promise<Media | null> {
    return this.mediaReposityory.findOneBy( { id: id });
  }

  async update(id: number, updateMediaDto: UpdateMediaDto): Promise<Media | null> {
    const {eventId, highlightIds, memberIds, ...mediaFields } = updateMediaDto;

    const media = await this.mediaReposityory.update(id, {
      ...mediaFields,
      ...(eventId  !== undefined && { event: { eventId }}),
      ...( highlightIds !== undefined && { highlight : { highlightIds }} )
    })

    return this.findOne(id);
  }

  remove(id: number): Promise<void> {
    return this.mediaReposityory.delete(id).then(() => undefined );
  }
}
