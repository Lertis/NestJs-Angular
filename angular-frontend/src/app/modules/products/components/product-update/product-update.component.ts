import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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

	constructor() {
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

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

}
