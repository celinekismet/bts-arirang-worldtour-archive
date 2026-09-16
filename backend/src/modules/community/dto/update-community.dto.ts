import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityDto } from './create-community.dto.js';

export class UpdateCommunityDto extends PartialType(CreateCommunityDto) {}
