import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	if(configService.get('ORIGIN') !== '*'){
		app.enableCors({ origin: '*' });
	}else{
		const pattern = `^((https?:\/\/)?.*?(${configService.get('ORIGIN')}+))($|\/.*$)`;
		app.enableCors({ 
			origin: new RegExp(pattern)
		});
	}

	await app.listen(3000);
}
bootstrap();
