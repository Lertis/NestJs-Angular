import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state';
import { productsLoadRequest } from '../../store/actions/products.actions';
import { selectProducts } from '../../store/selectors/products.selectors';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { IProduct } from '../../entity/product.interface';

@Component({
	selector: 'app-products-wrapper',
	templateUrl: './products-wrapper.component.html',
	styleUrls: ['./products-wrapper.component.scss'],
})
export class ProductsWrapperComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();

	constructor(private readonly store: Store<AppState>) {
		this.store
			.select(selectProducts)
			.pipe(take(1), takeUntil(this.destroy$))
			.subscribe((products: Array<IProduct>) => {
				if (!products.length) {
					this.store.dispatch(productsLoadRequest({ url: 'products' }));
				}
			});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
