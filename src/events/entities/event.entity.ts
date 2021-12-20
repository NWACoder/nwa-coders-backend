export default class Event {
  id: string;
  url: string;
  date: string;
  time: string;
  name: string;
  type: string;

  constructor({ id, url, date, type, time, name }) {
    this.id = id;
    this.url = (url && url.url) || null;
    this.date = (date && date.date.start) || null;
    this.time = (time && time.rich_text[0].plain_text) || null;
    this.name = (name && name.title[0].plain_text) || null;
    this.type = (type && type.select.name) || null;
  }
}
