import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotionModule } from './notion/notion.module';
import { GuestSpeakerFormModule } from './guest-speaker-form/guest-speaker-form.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), NotionModule, GuestSpeakerFormModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}