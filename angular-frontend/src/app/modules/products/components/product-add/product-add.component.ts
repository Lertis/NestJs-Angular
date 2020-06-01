import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { cloneDeep } from 'lodash';
import { productProfileValidation } from '../../utils/validation';
import { ApiService } from '../../../../shared/services/api.service';
import { MessageToastService } from '../../../../shared/services/message.service';
import { IToastMessage, ToastTypes } from '../../../../models/entities';
import { CanComponentDeactivate } from '../../../../shared/guards/can.deactivate.guard';
import { ConfirmationPopUpComponent } from '../../../../shared/components/confirmation-pop-up/confirmation-pop-up.component';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnDestroy, CanComponentDeactivate {
	private readonly destroy$ = new Subject<void>();
	private changed = false;

	public formSet = {
		title: '',
		description: '',
		price: 0,
	};

	public disableBtn = true;

	public createForm = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		price: new FormControl(0),
	});

	constructor(
		public readonly redirectService: RedirectService,
		private readonly api: ApiService,
		private readonly messageService: MessageToastService,
		private readonly dialog: MatDialog
	) {
		this.createForm.valueChanges
			.pipe(takeUntil(this.destroy$))
			.subscribe((resultOfChanges: { description: string; price: number; title: string }) => {
				this.formHasChanged();
			});
	}

	private formHasChanged() {
		const profileClone = cloneDeep(this.createForm.value);
		const profileCheck = productProfileValidation(profileClone, this.formSet);
		this.changed = profileCheck.changed;
		const checkSet = Object.keys(profileCheck).map((attr) => profileCheck[attr]);
		this.disableBtn = checkSet.some((flag: boolean) => !flag);
	}

	public fieldHasError(fieldName: string) {
		return this.createForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.createForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}

	public createProduct() {
		this.api
			.postRequest<{ id: string }>('products', this.createForm.value)
			.pipe(takeUntil(this.destroy$))
			.subscribe((prodId: { id: string }) => {
				const message: IToastMessage = {
					type: ToastTypes.Success,
					detail: 'Product has been successfully created',
					summary: `Product # ${prodId.id} created`,
				};
				this.messageService.addSingle(message);
				this.redirectService.redirectTo(`products`, { replaceUrl: true });
			});
	}

	canDeactivate(): Observable<boolean> | boolean {
		if (!this.changed) {
			return true;
		}
		const dialogRef = this.dialog.open(ConfirmationPopUpComponent);
		dialogRef.componentInstance.config.text = 'Do you want to discard your changes?';
		return dialogRef.afterClosed();
	}

	public ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
