import {
	Controller,
	Post,
	Body,
	Get,
	Param,
	Patch,
	Delete,
	UsePipes,
	ValidationPipe,
	UseGuards,
	UseInterceptors,
	Inject,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { AuthGuard } from '../guards/auth.guard';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService, @Inject('SIMPLE_LOG') private readonly simple) {
		this.simple.log('TOKEN SERVICE INJECT');
	}

	@Post()
	@UsePipes(new ValidationPipe())
	addProduct(
		@Body('title') prodTitle: string,
		@Body('description') prodDesc: string,
		@Body('price') prodPrice: number
	) {
		const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
		return { id: generatedId };
	}

	@Get()
	@UseGuards(AuthGuard)
	getAllProducts() {
		return this.productsService.getProducts();
	}

	@Get(':id')
	getProduct(@Param('id') prodId: string) {
		return this.productsService.getSingleProduct(prodId);
	}

	@Patch(':id')
	updateProduct(
		@Param('id') prodId: string,
		@Body('title') prodTitle: string,
		@Body('description') prodDesc: string,
		@Body('price') prodPrice: number
	) {
		this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
		return null;
	}

	@Delete(':id')
	removeProduct(@Param('id') prodId: string) {
		this.productsService.deleteProduct(prodId);
		return null;
	}
}
