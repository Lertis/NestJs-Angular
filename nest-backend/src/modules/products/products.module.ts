import { Module, Global, Scope } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './services/products.service';
import { mockService } from './services/mock.service';
import { InfoService } from './services/info.service';

@Global()
@Module({
	controllers: [ProductsController],
	providers: [
		ProductsService,
		{
			provide: 'SIMPLE_LOG',
			useValue: mockService,
		},
		{
			provide: 'MINE',
			scope: Scope.REQUEST,
			useFactory: (info: InfoService) => {
				return info;
			},
			inject: [InfoService],
		},
		InfoService,
	],
	exports: [ProductsService],
})
export class ProductsModule {}
