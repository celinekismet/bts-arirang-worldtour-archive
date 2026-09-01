import { PartialType } from '@nestjs/mapped-types';
import { CreateHighlightDto } from './create-highlight.dto.js';

export class UpdateHighlightDto extends PartialType(CreateHighlightDto) {}
