import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RedirectService } from '../redirect.service';
import { URLS_TO_REDIRECT } from './redirect.service.set';

describe('[Service]: Redirect Service', () => {
	let redirect: RedirectService;
	let router: Router;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [],
			providers: [
				RedirectService,
				{
					provide: Router,
					useValue: {
						navigate: () => true,
					},
				},
			],
		});
		redirect = TestBed.inject(RedirectService);
		router = TestBed.inject(Router);
	}));

	it('should be created', () => {
		expect(redirect).toBeTruthy();
	});

	URLS_TO_REDIRECT.forEach((test) => {
		it(`should be navigated to ${test.url} `, () => {
			const spy = jest.spyOn(router, 'navigate').mockReturnValue(new Promise<true>(() => true));
			redirect.redirectTo(test.url, test.extraProps);
			expect(spy).toHaveBeenCalled();
		});
	});
});
