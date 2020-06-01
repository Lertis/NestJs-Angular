import { async, TestBed } from '@angular/core/testing';
import { AuthStateService } from '../auth.state.service';

describe('[Service]: Auth State', () => {
	let authState: AuthStateService;
	let flag: boolean;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [],
			providers: [AuthStateService],
		});
		authState = TestBed.inject(AuthStateService);
	}));

	it(`AuthStateService: =>	should be created`, () => {
		expect(authState).toBeTruthy();
	});

	describe('[Method: setLoginedStatus]: ', () => {
		it(`[Method: setLoginedStatus]: should chage the status to true`, () => {
			flag = true;
			const spy = spyOn(authState, 'setLoginedStatus').and.callThrough();
			authState.setLoginedStatus(flag);
			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(flag);
			expect(authState.getLoginedStatus()).toEqual(flag);
		});

		it(`should chage the status to false`, () => {
			flag = false;
			const spy = spyOn(authState, 'setLoginedStatus').and.callThrough();
			authState.setLoginedStatus(flag);
			expect(spy).toHaveBeenCalled();
			expect(spy).toHaveBeenCalledWith(flag);
			expect(authState.getLoginedStatus()).toEqual(flag);
		});
	});

	describe('[Method: setLoginedStatus]: ', () => {
		it(`should chage the status to true`, () => {
			const spy = spyOn(authState, 'getLoginedStatus');
			const res = authState.getLoginedStatus();
			expect(spy).toHaveBeenCalled();
			expect(res).toBeFalsy();
		});
	});
});
