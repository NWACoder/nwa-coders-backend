import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { QueryDatabaseParameters } from 'src/types/notionApi';
import { CreateNotionSpeakerDto } from './dto/create-notion-speaker.dto';

@Injectable()
export class NotionService {
  constructor(private httpService: HttpService) {}

  async createSpeaker(data: CreateNotionSpeakerDto): Promise<Observable<AxiosResponse<CreateNotionSpeakerDto, any>>> {
    return this.httpService.post('pages', data).pipe(map((response) => response.data));
  }

  getEvents({ database_id, ...body }: QueryDatabaseParameters): Observable<AxiosResponse<any, any>> {
    const filter = {
      filter: { property: 'Status', select: { equals: 'Published' } },
      sorts: [{ property: 'Day', direction: 'ascending' }],
    };
    return this.httpService.post(`databases/${database_id}/query`, filter).pipe(
      map((response) => response.data),
      catchError(({ response }: AxiosError) => {
        if (response.data && response.data.code === 'validation_error') {
          throw new BadRequestException(response.data.message);
        } else if (response.data && response.data.code === 'object_not_found') {
          throw new NotFoundException(response.data.message);
        } else {
          throw new BadRequestException('Bad Request');
        }
      }),
    );
  }
}
