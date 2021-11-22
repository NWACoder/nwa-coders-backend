import { Module } from '@nestjs/common';
import { GuestSpeakerFormService } from './guest-speaker-form.service';
import { GuestSpeakerFormController } from './guest-speaker-form.controller';
import { NotionService } from 'src/notion/notion.service';
import { NotionModule } from 'src/notion/notion.module';


@Module({
	imports: [NotionModule],
	controllers: [GuestSpeakerFormController],
	providers: [GuestSpeakerFormService, NotionService]
})
export class GuestSpeakerFormModule {}
