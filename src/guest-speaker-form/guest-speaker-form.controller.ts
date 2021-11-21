import { Controller,Post, Body, UseGuards } from '@nestjs/common';
import { NotionService } from 'src/notion/notion.service';
import { CreateNotionSpeakerDto } from 'src/notion/dto/create-notion-speaker.dto';
import { SpeakerTokenGuard } from './speaker-token.guard';

@Controller('guest-speaker-form')
export class GuestSpeakerFormController {
	constructor(private  notionService: NotionService) {}

	@Post()
	@UseGuards(SpeakerTokenGuard)
	create(@Body() createNotionDto: CreateNotionSpeakerDto) {
		return this.notionService.createSpeaker(createNotionDto)
	}
}
