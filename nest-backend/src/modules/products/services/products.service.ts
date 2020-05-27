import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { Product } from '../product.model';

@Injectable()
export class ProductsService {
	private products: Product[] = [
		{
			id: 'a4cf0dde-2817-4387-916e-cf3cce2f7e31',
			description: 'Description #1',
			price: 1,
			title: 'Title #1',
		},
	];

	insertProduct(title: string, desc: string, price: number) {
		const prodId = uuidv4();
		const newProduct = new Product(prodId, title, desc, price);
		this.products.push(newProduct);
		return prodId;
	}

	getProducts() {
		return [...this.products];
	}

	getSingleProduct(productId: string) {
		const product = this.findProduct(productId)[0];
		return { ...product };
	}

	updateProduct(productId: string, title: string, desc: string, price: number) {
		const [product, index] = this.findProduct(productId);
		const updatedProduct = { ...product };
		if (title) {
			updatedProduct.title = title;
		}
		if (desc) {
			updatedProduct.description = desc;
		}
		if (price) {
			updatedProduct.price = price;
		}
		this.products[index] = updatedProduct;
	}

	deleteProduct(prodId: string) {
		const index = this.findProduct(prodId)[1];
		this.products.splice(index, 1);
	}

	private findProduct(id: string): [Product, number] {
		const productIndex = this.products.findIndex((prod) => prod.id === id);
		const product = this.products[productIndex];
		if (!product) {
			throw new NotFoundException('Could not find product.');
		}
		return [product, productIndex];
	}

	// TODO: ONLY FOR DEVELOPMENT TEST
	private fillArray(arr: Product[], count: number) {
		for (let i = 0; i < count; i++) {
			arr.push({
				id: i.toString(),
				title: `Title ${i}`,
				price: i + 1,
				description: `Description ${i}`,
			});
		}
		return arr;
	}
}
