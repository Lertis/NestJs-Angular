import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state';
import { selectProducts, selectLoaded, selectLoading } from '../../store/selectors/products.selectors';
import { IProduct } from '../../entity/product.interface';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject, combineLatest } from 'rxjs';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();
	public products: IProduct[];
	public isLoading: boolean;
	public isLoaded: boolean;

	constructor(private readonly store: Store<AppState>, public readonly redirectService: RedirectService) {

		combineLatest([
			this.store.select(selectLoaded),
			this.store.select(selectLoading),
			this.store.select(selectProducts)
		]).pipe(
			takeUntil(this.destroy$),
			filter(([loaded, loading, ...rest]: [boolean, boolean, IProduct[]]) => {
				return loaded !== null && loading !== null;
			})
		).subscribe(([loaded, loading, products]: [boolean, boolean, IProduct[]]) => {
			this.isLoaded = loaded;
			this.isLoading = loading;
			this.products = products;
		});
	}

	public trackByMethod(index: number, el: IProduct): string {
		return el.id;
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
