import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NotionService } from './notion.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
	ConfigModule,
	HttpModule.registerAsync({
		imports: [ConfigModule],
		useFactory: async (configService: ConfigService) => ({
			baseURL: configService.get('NOTION_URL'),
			headers: {          
				'Authorization': configService.get('NOTION_API'),
				'Notion-Version': configService.get('NOTION_VERSION'),
				'Content-Type': 'application/json',
			},
			timeout: 7000,
			maxRedirects: 5
		}),
		inject: [ConfigService]
	})
	],
 	controllers: [],
  	providers: [NotionService],
  	exports:[HttpModule]
})
export class NotionModule {}
