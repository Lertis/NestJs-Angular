import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthGuard } from './guards/auth.guard';

@Module({
	imports: [ProductsModule],
	controllers: [],
	providers: [AuthGuard],
})
export class MainModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.ALL });
	}
}
