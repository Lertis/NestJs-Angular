import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../api.service';
import { MOCK_PRODUCT, BASE_URL } from './api.service.set';

describe(`[Service]: ApiService`, () => {
	let api: ApiService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService],
		});

		api = TestBed.inject(ApiService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(api).toBeTruthy();
		expect(httpMock).toBeTruthy();
	});

	it('should send GET request', () => {
		const url = 'products/1';

		api.getRequest(url).subscribe((result) => {
			expect(result).toBe(1);
			expect(result).toEqual(MOCK_PRODUCT);
		});

		const httpRequest = httpMock.expectOne(`${BASE_URL}${url}`);
		expect(httpRequest.request.method).toBe('GET');
		httpRequest.flush(MOCK_PRODUCT);
	});

	it('should send POST request', () => {
		const url = 'products';

		api.postRequest(url, MOCK_PRODUCT).subscribe((result) => {
			expect(result).toBe(1);
			expect(result).toEqual(MOCK_PRODUCT);
		});

		const httpRequest = httpMock.expectOne(`${BASE_URL}${url}`);
		expect(httpRequest.request.method).toBe('POST');
		httpRequest.flush(MOCK_PRODUCT);
	});

	it('should send PUT request', () => {
		const url = 'products/1';

		api.putRequest(url, MOCK_PRODUCT).subscribe((result) => {
			expect(result).toBe(1);
			expect(result).toEqual(MOCK_PRODUCT);
		});

		const httpRequest = httpMock.expectOne(`${BASE_URL}${url}`);
		expect(httpRequest.request.method).toBe('PUT');
		httpRequest.flush(MOCK_PRODUCT);
	});

	it('should send PATCH request', () => {
		const url = 'products/1';

		api.patchRequest(url, MOCK_PRODUCT).subscribe((result) => {
			expect(result).toBe(1);
			expect(result).toEqual(MOCK_PRODUCT);
		});

		const httpRequest = httpMock.expectOne(`${BASE_URL}${url}`);
		expect(httpRequest.request.method).toBe('PATCH');
		httpRequest.flush(MOCK_PRODUCT);
	});

	it('should send DELETE request', () => {
		const url = 'products/1';

		api.deleteRequest(url).subscribe((result) => {
			expect(result).toBe(1);
			expect(result).toEqual(MOCK_PRODUCT);
		});

		const httpRequest = httpMock.expectOne(`${BASE_URL}${url}`);
		expect(httpRequest.request.method).toBe('DELETE');
		httpRequest.flush(MOCK_PRODUCT);
	});
});
