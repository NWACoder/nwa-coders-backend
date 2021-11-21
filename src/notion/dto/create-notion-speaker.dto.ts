import { createDate } from "./create-date.dto"
import { createRichText } from "./create-rich-text.dto"
import { createSelect } from "./create-select.dto"
import { createTitle } from "./create-title.dto"

export class CreateNotionSpeakerDto {

	parent: databaseID
	properties: { 
		// "Image": {"type": "files", "files": [ { "type": "external", "name": "Space Wallpaper", "url": "https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png" }]},
		Status: createSelect
		Slug: createRichText
		Video: createRichText
		Role: createRichText
		Date: createDate
		Email: createRichText
		Topic: createRichText
		Name: createTitle
	}
}

class databaseID{
	database_id: string
}