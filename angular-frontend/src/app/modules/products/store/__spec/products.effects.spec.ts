import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Actions } from '@ngrx/effects';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { Action, StoreModule, Store } from '@ngrx/store';
import { AppState } from '../../../../state';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../shared/services/api.service';
import { ProductsEffects } from '../effects/products.effects';
import { productsReducer } from '../products.reducer';
import { productsLoadRequest, productsLoaded } from '../actions/products.actions';
import { hot, cold } from 'jasmine-marbles';
import { apiError } from 'src/app/state/common.actions';

describe('Product Effects', () => {
	let mockStore: MockStore<AppState>;
	let effects: ProductsEffects;
	let actions: Observable<Action>;
	let api: ApiService;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: ApiService,
					useValue: {
						getRequest: jest.fn(),
					},
				},
				ProductsEffects,
				provideMockActions(() => actions),
				provideMockStore(),
			],
			imports: [
				HttpClientTestingModule,
				StoreModule.forRoot({
					products: productsReducer,
				}),
			],
		});
		mockStore = TestBed.inject<any>(Store);
		actions = TestBed.inject(Actions);
		effects = TestBed.inject(ProductsEffects);
		httpTestingController = TestBed.inject(HttpTestingController);
		api = TestBed.inject(ApiService);
	});

	it('should be created', () => {
		expect(api).toBeTruthy();
		expect(effects).toBeTruthy();
		expect(actions).toBeTruthy();
	});

	describe('[Effect: dashboardsCollectionRequest] ', () => {
		it('Successfully', () => {
			const products = [
				{
					id: 'a4cf0dde-2817-4387-916e-cf3cce2f7e31',
					description: 'Description #1',
					price: 1,
					title: 'Title #1',
				},
			];
			const action = productsLoadRequest({ url: 'products' });
			const completion = productsLoaded({ products });

			actions = hot('-a', { a: action });
			const response = cold('-a|', { a: products });
			const expected = cold('--b', { b: completion });
			api.getRequest = jest.fn(() => response);
			expect(effects.dashboardsCollectionRequest$).toBeObservable(expected);
		});

		it('Failure', () => {
			const products = [
				{
					id: 'a4cf0dde-2817-4387-916e-cf3cce2f7e31',
					description: 'Description #1',
					price: 1,
					title: 'Title #1',
				},
			];
			const action = productsLoadRequest({ url: 'products' });
			const error = new Error('some error') as any;
			const outcome = apiError({ err: error });

			actions = hot('a|', { a: action });
			const expected = cold('-(b|)', { b: outcome });
			const response = cold('-#|', {}, error);
			api.getRequest = jest.fn(() => response);
			expect(effects.dashboardsCollectionRequest$).toBeObservable(expected);
		});
	});
});
