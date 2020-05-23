import { Action, createReducer, on } from '@ngrx/store';
import { IProductEntity, INITIAL_PRODUCTS_ENTITY } from '../entity/products.entity';
import * as actions from './actions/products.actions';

const featureReducer = createReducer(
	INITIAL_PRODUCTS_ENTITY,
	on(actions.productsLoadRequest, state => ({
		...state,
		loaded: false,
		loading: true,
		products: []
	})),
	on(actions.productsLoaded, (state, { products }) => ({
		...state,
		loaded: true,
		loading: false,
		products
	}))
);

export function productsReducer(state: IProductEntity | undefined, action: Action) {
	return featureReducer(state, action);
}
