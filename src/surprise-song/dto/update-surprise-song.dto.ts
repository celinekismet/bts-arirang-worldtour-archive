import { PartialType } from '@nestjs/mapped-types';
import { CreateSurpriseSongDto } from './create-surprise-song.dto.js';

export class UpdateSurpriseSongDto extends PartialType(CreateSurpriseSongDto) {}
