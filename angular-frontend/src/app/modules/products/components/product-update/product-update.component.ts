import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil, mergeMap, catchError } from 'rxjs/operators';
import { Subject, EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../shared/services/api.service';
import { IProduct } from '../../entity/product.interface';
import { MessageToastService } from '../../../../shared/services/message.service';
import { IToastMessage, ToastTypes } from '../../../../models/entities';
import { RedirectService } from 'src/app/shared/services/redirect.service';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit, OnDestroy {

	private readonly destroy$ = new Subject<void>();

	public updateForm = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		price: new FormControl(0)
	});

	constructor(
		private readonly route: ActivatedRoute,
		private readonly api: ApiService,
		private readonly message: MessageToastService,
		private readonly redirectService: RedirectService) {

		this.route.params.pipe(
			takeUntil(this.destroy$),
			mergeMap((params: { id: string }) => {
				return this.api.getRequest(`products/${params.id}`);
			}),
			catchError((err) => {
				const errorMessage: IToastMessage = {
					type: ToastTypes.Error,
					detail: err.error.message,
					summary: err.error.error
				};
				this.redirectService.redirectTo('products', { replaceUrl: true });
				this.message.addSingle(errorMessage);
				return EMPTY;
			})
		).subscribe((product: IProduct) => {
			this.setFormValue(product);
		});

		this.updateForm.valueChanges.pipe(
			takeUntil(this.destroy$)
		).subscribe((resultOfChanges: {
			description: string
			price: number,
			title: string
		}) => {
			this.formHasChanged();
		});
	}

	public fieldHasError(fieldName: string) {
		return this.updateForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.updateForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}

	private formHasChanged() {
		// Form has been changed
	}

	private setFormValue(product: IProduct) {
		this.updateForm.setValue({
			title: product.title,
			description: product.description,
			price: product.price
		});
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
