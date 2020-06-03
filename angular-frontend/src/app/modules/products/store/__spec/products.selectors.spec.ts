import { AppState } from '../../../../state';
import { cloneDeep } from 'lodash';
import { INITIAL_PRODUCTS_ENTITY, IProductEntity } from '../../entity/products.entity';
import { selectLoaded, selectLoading, selectProducts } from '../selectors/products.selectors';
import { productsLoadRequest, productsLoaded } from '../actions/products.actions';
import { productsReducer } from '../products.reducer';

describe('Products  selectors ', () => {
	describe('[Selector: selectLoaded]', () => {
		it(' should return null', () => {
			const productsEntity: IProductEntity = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const appStateObj: AppState = { products: productsEntity };
			const result = selectLoaded(appStateObj);
			expect(result).toEqual(null);
		});

		it(' should return false', () => {
			const cloneState = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const action = productsLoadRequest({ url: 'prodcuts' });
			const result: IProductEntity = productsReducer(cloneState, action);
			const appStateObj: AppState = { products: result };
			const res = selectLoaded(appStateObj);
			expect(res).toEqual(false);
		});
	});

	describe('[Selector: selectLoading]', () => {
		it(' should return null', () => {
			const productsEntity: IProductEntity = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const appStateObj: AppState = { products: productsEntity };
			const result = selectLoading(appStateObj);
			expect(result).toEqual(null);
		});

		it(' should return true', () => {
			const cloneState = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const action = productsLoadRequest({ url: 'prodcuts' });
			const result: IProductEntity = productsReducer(cloneState, action);
			const appStateObj: AppState = { products: result };
			const res = selectLoading(appStateObj);
			expect(res).toEqual(true);
		});
	});

	describe('[Selector: selectProducts]', () => {
		it(' should return empty collection', () => {
			const productsEntity: IProductEntity = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const appStateObj: AppState = { products: productsEntity };
			const result = selectProducts(appStateObj);
			expect(result).toEqual([]);
		});

		it(' should return true', () => {
			const products = [
				{
					id: 'a4cf0dde-2817-4387-916e-cf3cce2f7e31',
					description: 'Description #1',
					price: 1,
					title: 'Title #1',
				},
			];
			const cloneState = cloneDeep(INITIAL_PRODUCTS_ENTITY);
			const action = productsLoaded({ products });
			const result: IProductEntity = productsReducer(cloneState, action);
			const appStateObj: AppState = { products: result };
			const res = selectProducts(appStateObj);
			expect(res).toEqual(products);
		});
	});
});
