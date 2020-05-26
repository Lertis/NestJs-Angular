import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil, mergeMap, catchError, skip } from 'rxjs/operators';
import { Subject, EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../shared/services/api.service';
import { IProduct } from '../../entity/product.interface';
import { MessageToastService } from '../../../../shared/services/message.service';
import { IToastMessage, ToastTypes } from '../../../../models/entities';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { cloneDeep } from 'lodash';
import { productProfileValidation } from '../../utils/validation';

@Component({
	selector: 'app-product-update',
	templateUrl: './product-update.component.html',
	styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit, OnDestroy {
	private readonly destroy$ = new Subject<void>();
	private productId: string;

	public updateForm = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		price: new FormControl(0),
	});

	public formSet = {
		title: '',
		description: '',
		price: 0,
	};

	public disableBtn = true;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly api: ApiService,
		private readonly message: MessageToastService,
		public readonly redirectService: RedirectService
	) {
		this.route.params
			.pipe(
				takeUntil(this.destroy$),
				mergeMap((params: { id: string }) => {
					return this.api.getRequest(`products/${params.id}`);
				}),
				catchError((err) => {
					console.log(err);
					const errorMessage: IToastMessage = {
						type: ToastTypes.Error,
						detail: err.error.message,
						summary: err.error.error,
					};
					this.redirectService.redirectTo('products', { replaceUrl: true });
					this.message.addSingle(errorMessage);
					return EMPTY;
				})
			)
			.subscribe((product: IProduct) => {
				this.productId = product.id;
				this.setFormValue(product);
			});

		this.updateForm.valueChanges
			.pipe(skip(1), takeUntil(this.destroy$))
			.subscribe((resultOfChanges: { description: string; price: number; title: string }) => {
				this.formHasChanged();
			});
	}

	public updateProduct() {
		this.api
			.patchRequest<IProduct>(`products/${this.productId}`, this.updateForm.value)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.redirectService.redirectTo('products', { replaceUrl: true });
				this.message.addSingle({
					type: ToastTypes.Success,
					detail: 'Product has been successfully updated',
					summary: `Product # ${this.productId} updated`,
				});
			});
	}

	public fieldHasError(fieldName: string) {
		return this.updateForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.updateForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}

	private formHasChanged() {
		const profileClone = cloneDeep(this.updateForm.value);
		const profileCheck = productProfileValidation(profileClone, this.formSet);
		const checkSet = Object.keys(profileCheck).map((attr) => profileCheck[attr]);
		this.disableBtn = checkSet.some((flag: boolean) => !flag);
	}

	private setFormValue(product: IProduct) {
		this.updateForm.setValue({
			title: product.title,
			description: product.description,
			price: product.price,
		});
		this.formSet = this.updateForm.value;
	}

	ngOnInit(): void {}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
