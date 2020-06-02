import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guards';
import { AuthStateService } from '../../services/auth.state.service';
import { RedirectService } from '../../services/redirect.service';
import { MessageToastService } from '../../services/message.service';
import { MessageService } from 'primeng/api';

describe('OneGuard', () => {
	let guard: AuthGuard;
	let auth: AuthStateService;
	let redirect: RedirectService;
	let message: MessageToastService;
	let router: Router;

	const routeMock: any = { snapshot: {} };
	const routeStateMock: any = { snapshot: {}, url: '/products' };
	const routerMock = { navigate: jasmine.createSpy('navigate') };

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuthGuard,
				AuthStateService,
				RedirectService,
				MessageToastService,
				MessageService,
				{
					provide: Router,
					useValue: routerMock,
				},
			],
		});
		guard = TestBed.inject(AuthGuard);
		auth = TestBed.inject(AuthStateService);
		redirect = TestBed.inject(RedirectService);
		message = TestBed.inject(MessageToastService);
		router = TestBed.inject(Router);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
		expect(auth).toBeTruthy();
		expect(redirect).toBeTruthy();
		expect(message).toBeTruthy();
	});

	it('should redirect to auth/login url with replaceUrl config', () => {
		expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
		expect(routerMock.navigate).toHaveBeenCalledWith(['auth/login'], { replaceUrl: true });
	});

	it('should redirect to products, because user is loggined', () => {
		auth.setLoginedStatus(true);
		expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
	});
});
