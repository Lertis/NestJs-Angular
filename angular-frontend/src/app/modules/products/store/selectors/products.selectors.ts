import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../state';
import { IProductEntity } from '../../entity/products.entity';

const selectFeature = (state: AppState) => state.products;

export const selectProducts = createSelector(
	selectFeature,
	(state: IProductEntity) => state.products
);

export const selectLoaded = createSelector(
	selectFeature,
	(state: IProductEntity) => state.loaded
);

export const selectLoading = createSelector(
	selectFeature,
	(state: IProductEntity) => state.loading
);
