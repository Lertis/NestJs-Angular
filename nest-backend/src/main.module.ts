import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ProductsModule } from './modules/products/products.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { LoggerModule } from './modules/logger/logger.module';
import { DynamicDumpModule } from './modules/dynamic/dynamic.dump.module';
import { AuthModule } from './modules/auth/auth.module';
import { GridModule } from './modules/grid/grid.module';
import { TasksModule } from './modules/cron/task.module';

@Module({
	imports: [
		ProductsModule,
		LoggerModule,
		DynamicDumpModule.forRoot(),
		AuthModule,
		GridModule,
		ScheduleModule.forRoot(),
		TasksModule,
	],
	controllers: [],
	providers: [AuthGuard, LoggingInterceptor],
})
export class MainModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes({ path: 'products', method: RequestMethod.ALL });
	}
}
