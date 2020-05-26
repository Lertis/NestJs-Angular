import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
	imports: [ProductsModule],
	controllers: [],
	providers: [],
})
export class MainModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.ALL });
	}
}
