import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import { productProfileValidation } from '../../utils/validation';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();

	public formSet = {
		title: '',
		description: '',
		price: 0
	};

	public disableBtn = true;

	public createForm = new FormGroup({
		title: new FormControl(''),
		description: new FormControl(''),
		price: new FormControl(0)
	});

	constructor(public readonly redirectService: RedirectService) {
		this.createForm.valueChanges.pipe(
			takeUntil(this.destroy$)
		).subscribe((resultOfChanges: {
			description: string
			price: number,
			title: string
		}) => {
			this.formHasChanged();
		});
	}

	private formHasChanged() {
		const profileClone = cloneDeep(this.createForm.value);
		const profileCheck = productProfileValidation(profileClone, this.formSet);
		const checkSet = Object.keys(profileCheck).map(attr => profileCheck[attr]);
		this.disableBtn = checkSet.some((flag: boolean) => !flag);
	}

	public fieldHasError(fieldName: string) {
		return this.createForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.createForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}

	public createProduct() {}

	public ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
