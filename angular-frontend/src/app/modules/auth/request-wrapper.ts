import { OnDestroy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from '../../shared/services/api.service';
import { IRequestContainer, RequestTypes } from '../../models/requests';
import { MessageToastService } from '../../shared/services/message.service';
import { Subject, EMPTY } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { IToastMessage, ToastTypes } from '../../models/entities';
import { RedirectService } from '../../shared/services/redirect.service';
import { AppState } from '../../state';
import { AuthStateService } from '../../shared/services/auth.state.service';

@Component({
	template: ``,
})
export abstract class AuthRequestWrapper implements OnDestroy {
	protected readonly destroy$ = new Subject<void>();
	constructor(
		protected readonly api: ApiService,
		protected readonly messageService: MessageToastService,
		protected readonly redirectService: RedirectService,
		protected readonly store: Store<AppState>,
		protected readonly authState: AuthStateService
	) {}

	protected authRequests(container: IRequestContainer) {
		if (container.method === RequestTypes.LOGIN) {
			this.api
				.postRequest(`auth/login`, container.body)
				.pipe(
					takeUntil(this.destroy$),
					catchError((err) => {
						const errorMessage: IToastMessage = {
							type: ToastTypes.Error,
							detail: err.error.message,
							summary: `No matches for these credentials`,
						};
						this.messageService.addSingle(errorMessage);
						return EMPTY;
					})
				)
				.subscribe(() => {
					this.authState.setLoginedStatus(true);
					const successMessage: IToastMessage = {
						type: ToastTypes.Success,
						detail: 'Welcome!',
						summary: 'You are successfully logged',
					};
					this.messageService.addSingle(successMessage);
					this.redirectService.redirectTo('products', { replaceUrl: true });
				});
		}

		if (container.method === RequestTypes.REG) {
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
