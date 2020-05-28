import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RedirectService } from '../../../../shared/services/redirect.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import { authFormValidation } from '../../utils/validation';
import { AuthRequestWrapper } from '../../request-wrapper';
import { ApiService } from '../../../../shared/services/api.service';
import { MessageToastService } from '../../../../shared/services/message.service';
import { IRequestContainer, RequestTypes } from '../../../../models/requests';
import { AppState } from '../../../../state';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AuthRequestWrapper implements OnDestroy {
	protected readonly destroy$ = new Subject<void>();
	private formSet = {
		username: '',
		password: '',
	};

	public loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});
	public disableBtn = true;

	constructor(
		public readonly redirectService: RedirectService,
		protected readonly api: ApiService,
		protected readonly messageService: MessageToastService,
		protected readonly store: Store<AppState>
	) {
		super(api, messageService, redirectService, store);
		this.loginForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
			this.formHasChanged();
		});
	}

	public fieldHasError(fieldName: string) {
		return this.loginForm.controls[fieldName].hasError('required');
	}

	public getErrorMessage(fieldName: string) {
		return this.loginForm.controls[fieldName].hasError('required') ? `Field ${fieldName} is required!` : '';
	}
	private formHasChanged() {
		const loginClone = cloneDeep(this.loginForm.value);
		const profileCheck = authFormValidation(loginClone, this.formSet);
		const checkSet = Object.keys(profileCheck).map((attr) => profileCheck[attr]);
		this.disableBtn = checkSet.some((flag: boolean) => !flag);
	}

	public login() {
		const container: IRequestContainer = {
			body: this.loginForm.value,
			method: RequestTypes.LOGIN,
			url: 'auth/login',
		};
		this.authRequests(container);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
