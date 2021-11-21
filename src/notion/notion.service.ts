import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateNotionSpeakerDto } from './dto/create-notion-speaker.dto';

@Injectable()
export class NotionService {

	constructor(private httpService: HttpService) {}

	async createSpeaker(data: CreateNotionSpeakerDto): Promise<Observable<AxiosResponse<CreateNotionSpeakerDto, any>>>{
		return this.httpService.post('pages', data).pipe(map(response => response.data));
	}

}
