import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { authFormValidation } from '../../utils/validation';
import { cloneDeep } from 'lodash';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();
	private formSet = {
		username: '',
		password: '',
	};

	public regForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});
	public disableBtn = true;

	constructor(public readonly redirectService: RedirectService) {
		this.regForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.formHasChanged();
		});
	}

	public fieldHasError(fieldName: string) {
		return this.regForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.regForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}
	private formHasChanged() {
		const regClone = cloneDeep(this.regForm.value);
		const profileCheck = authFormValidation(regClone, this.formSet);
		const checkSet = Object.keys(profileCheck).map((attr) => profileCheck[attr]);
		this.disableBtn = checkSet.some((flag: boolean) => !flag);
	}

	public reg() {}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
