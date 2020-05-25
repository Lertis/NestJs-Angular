import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../../../../shared/services/api.service';
import * as actions from '../actions/products.actions';
import { apiError } from '../../../../state/common.actions';
import { IProduct } from '../../entity/product.interface';

@Injectable()
export class ProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly api: ApiService
	) { }

	public readonly dashboardsCollectionRequest$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.productsLoadRequest),
			switchMap((payload: { url: string }) => {
				return this.api.getRequest<Array<IProduct>>(payload.url).pipe(
					map((products: IProduct[]) => {
						return actions.productsLoaded({ products });
					}),
					catchError((err) => of(apiError({ err })))
				);
			})
		)
	);
}
