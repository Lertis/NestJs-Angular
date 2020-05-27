import { Module, Global } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

export const mockService = {
	log(message: string) {
		console.log(`${message} !!!`);
	},
};

@Global()
@Module({
	controllers: [ProductsController],
	providers: [
		ProductsService,
		{
			provide: 'SIMPLE_LOG',
			useValue: mockService,
		},
	],
	exports: [ProductsService],
})
export class ProductsModule {}
