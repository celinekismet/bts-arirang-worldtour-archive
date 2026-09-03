import { PartialType } from '@nestjs/mapped-types';
import { CreateOutfitDto } from './create-outfit.dto.js';

export class UpdateOutfitDto extends PartialType(CreateOutfitDto) {}
