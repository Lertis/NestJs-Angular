import { productsLoadRequest, productsLoaded } from '../actions/products.actions';
import { productsReducer } from '../products.reducer';
import { INITIAL_PRODUCTS_ENTITY } from '../../entity/products.entity';

describe('Products reducer', () => {
	it('should return the state during the load request', () => {
		const action = productsLoadRequest({ url: 'products' });
		const result = productsReducer(INITIAL_PRODUCTS_ENTITY, action);
		expect(result).toStrictEqual({
			...INITIAL_PRODUCTS_ENTITY,
			loaded: false,
			loading: true,
			products: [],
		});
	});

	it('should return the state after the load request', () => {
		const products = [
			{
				id: 'a4cf0dde-2817-4387-916e-cf3cce2f7e31',
				description: 'Description #1',
				price: 1,
				title: 'Title #1',
			},
		];
		const action = productsLoaded({ products });
		const result = productsReducer(INITIAL_PRODUCTS_ENTITY, action);
		expect(result).toStrictEqual({
			...INITIAL_PRODUCTS_ENTITY,
			errors: null,
			loaded: true,
			loading: false,
			products,
		});
	});
});
