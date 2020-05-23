import { IProductEntity, INITIAL_PRODUCTS_ENTITY } from '../modules/products/entity/products.entity';

export interface AppState {
	products: IProductEntity;
}

export const INITIAL_APPLICATION_STATE: AppState = {
	products: INITIAL_PRODUCTS_ENTITY
};
