import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
	const app = await NestFactory.create(MainModule);
	const options = {
		origin: '*',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		preflightContinue: false,
		optionsSuccessStatus: 204,
		credentials: false,
	};
	app.enableCors(options);
	await app.listen(3000);
}
bootstrap();
