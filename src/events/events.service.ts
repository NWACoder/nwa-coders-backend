import { BadRequestException, Injectable, ParseUUIDPipe } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { NotionService } from 'src/notion/notion.service';
import { ListDatabasesResponse, QueryDatabaseResponse } from 'src/types/notionApi';
import { CreateEventDto } from './dto/create-event.dto';
import { GetEventsDto } from './dto/get-events.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import Event from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(private notionService: NotionService) {}
  create(createEventDto: CreateEventDto) {
    return 'This action adds a new event';
  }

  findAll(body: GetEventsDto) {
    const { database_id, sort } = body;
    if (!database_id) throw new BadRequestException('database_id is required');
    return this.notionService.getEvents({ database_id }).pipe(
      map((res) => {
        const data = res as unknown as ListDatabasesResponse;
        if (data.object !== 'list') return;
        return data.results
          .filter((page) => {
            return page.properties.Status;
          })
          .map((page) => {
            const { id, properties } = page;
            return new Event({
              id,
              url: properties.Link,
              date: properties.Day,
              time: properties.Time,
              type: properties.Type,
              name: properties.Name,
            });
          });
      }),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
