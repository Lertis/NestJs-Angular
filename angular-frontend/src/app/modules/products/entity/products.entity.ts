import { IProduct } from './product.interface';

export interface IProductEntity {
	products: IProduct[];
	loading: boolean;
	loaded: boolean;
	errors: any;
}

export const INITIAL_PRODUCTS_ENTITY: IProductEntity = {
	products: [],
	loaded: null,
	loading: null,
	errors: null
};
