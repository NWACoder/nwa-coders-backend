import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { NotionService } from 'src/notion/notion.service';
import { NotionModule } from 'src/notion/notion.module';

@Module({
  imports: [NotionModule],
  controllers: [EventsController],
  providers: [EventsService, NotionService],
})
export class EventsModule {}
