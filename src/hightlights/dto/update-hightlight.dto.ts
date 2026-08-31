import { PartialType } from '@nestjs/mapped-types';
import { CreateHightlightDto } from './create-hightlight.dto.js';

export class UpdateHightlightDto extends PartialType(CreateHightlightDto) {}
