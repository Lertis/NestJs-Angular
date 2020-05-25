import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state';
import { selectProducts } from '../../store/selectors/products.selectors';
import { Observable } from 'rxjs';
import { IProduct } from '../../entity/product.interface';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
	public products$: Observable<IProduct[]>;

	constructor(private readonly store: Store<AppState>) {
		this.products$ = this.store.select(selectProducts);
	}

	public trackByMethod(index: number, el: IProduct): string {
		return el.id;
	}
}
