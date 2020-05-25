import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../entity/product.interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

	@Input() public product: IProduct;

	constructor() { }

	ngOnInit(): void {
	}

}
