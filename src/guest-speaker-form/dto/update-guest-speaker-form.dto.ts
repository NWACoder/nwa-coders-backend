import { PartialType } from '@nestjs/mapped-types';
import { CreateGuestSpeakerFormDto } from './create-guest-speaker-form.dto';

export class UpdateGuestSpeakerFormDto extends PartialType(CreateGuestSpeakerFormDto) {}
