import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../entity/product.interface';
import { RedirectService } from 'src/app/shared/services/redirect.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

	@Input() public product: IProduct;

	constructor(public readonly redirectService: RedirectService) { }

	public getUpdateUrl() {
		return `products/update/${this.product.id}`;
	}

}
