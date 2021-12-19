export default class Event {
  id: string;
  url: string;
  date: string;
  time: string;
  name: string;
  type: string;

  constructor({ id, url, date, type, time, name }) {
    this.id = id;
    this.url = (url && url.url) || 'unknown';
    this.date = (date && date.date.start) || 'unknown';
    this.time = (time && time.rich_text[0].plain_text) || 'unknown';
    this.name = (name && name.title[0].plain_text) || 'unknown';
    this.type = (type && type.select.name) || 'unknown';
  }
}
