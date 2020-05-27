import { IsString, IsInt } from 'class-validator';

export class Product {
	@IsString()
	id: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@IsInt()
	price: number;

	constructor(id: string, title: string, description: string, price: number) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
	}
}
