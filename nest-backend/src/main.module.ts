import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
	imports: [ProductsModule],
	controllers: [],
	providers: [AuthGuard, LoggingInterceptor],
})
export class MainModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.ALL });
	}
}
