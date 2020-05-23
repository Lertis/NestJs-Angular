import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state';
import { productsLoadRequest } from '../../store/actions/products.actions';

@Component({
	selector: 'app-products-wrapper',
	templateUrl: './products-wrapper.component.html',
	styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements OnInit {

	constructor(private readonly store: Store<AppState>) { }

	ngOnInit(): void {
		this.store.dispatch(productsLoadRequest());
	}

}
