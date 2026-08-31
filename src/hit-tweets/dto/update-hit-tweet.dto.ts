import { PartialType } from '@nestjs/mapped-types';
import { CreateHitTweetDto } from './create-hit-tweet.dto.js';

export class UpdateHitTweetDto extends PartialType(CreateHitTweetDto) {}
