import { IdRequest } from "src/types/notionApi";

export class GetEventsDto {
  database_id: IdRequest;
  sort?: {
	  property: 'day';
	  direction: 'asc' | 'desc';
  };
}