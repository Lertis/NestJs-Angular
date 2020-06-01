import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import { Component, ChangeDetectorRef, OnDestroy, AfterContentChecked } from '@angular/core';
import { RedirectService } from './shared/services/redirect.service';
import { AuthStateService } from './shared/services/auth.state.service';
import { ApiService } from './shared/services/api.service';
import { MessageToastService } from './shared/services/message.service';
import { AuthRequestWrapper } from './modules/auth/request-wrapper';
import { RequestTypes, IRequestContainer } from './models/requests';

@Component({
	selector: 'app-root',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent extends AuthRequestWrapper implements OnDestroy, AfterContentChecked {
	public loggedMode = false;
	mobileQuery: MediaQueryList;
	private mobileQueryListener: () => void;
	fillerNav: { text: string; link: string }[] = [
		{
			text: 'Products',
			link: `products`,
		},
		{
			text: 'Ag-Grid',
			link: 'grid',
		},
		{
			text: 'Charts',
			link: 'charts',
		},
		{
			text: `About`,
			link: `about`,
		},
	];

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly media: MediaMatcher,
		private readonly router: Router,
		public readonly redirectService: RedirectService,
		protected readonly authStateService: AuthStateService,
		protected readonly api: ApiService,
		protected readonly messageService: MessageToastService,
		protected readonly store: Store<AppState>
	) {
		super(api, messageService, redirectService, store, authStateService);
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addEventListener('change', this.mobileQueryListener);
	}

	ngAfterContentChecked() {
		this.loggedMode = this.authState.getLoginedStatus();
	}

	public showAddComponent() {
		return this.router.url === '/products';
	}

	public confirmMethod() {
		if (confirm('Do you want to be logged as admin?')) {
			const container: IRequestContainer = {
				body: { username: 'admin', password: 'admin' },
				method: RequestTypes.LOGIN,
				url: 'auth/login',
			};
			this.authRequests(container);
		}
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
	}
}
