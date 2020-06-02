import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainHttpInterceptor } from '../main.http.interceptor';

@Injectable()
export class DataService {
	ROOT_URL = `http://jsonplaceholder.typicode.com`;

	constructor(private http: HttpClient) {}

	getPosts<T>() {
		return this.http.get<T>(`${this.ROOT_URL}/posts`);
	}
}

describe(`[HTTP Interceptor]: MainHttpInterceptor`, () => {
	let service: DataService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				DataService,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: MainHttpInterceptor,
					multi: true,
				},
			],
		});

		service = TestBed.inject(DataService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
		expect(httpMock).toBeTruthy();
	});

	it('should add an headers', () => {
		service.getPosts().subscribe((response) => {
			expect(response).toBeTruthy();
		});

		const httpRequest = httpMock.expectOne(`${service.ROOT_URL}/posts`);

		console.log(httpRequest.request.headers);
		expect(httpRequest.request.headers.has('Content-Type')).toEqual(true);
		expect(httpRequest.request.headers.has('Access-Control-Allow-Headers')).toEqual(true);
		expect(httpRequest.request.headers.has('Access-Control-Allow-Origin')).toEqual(true);
	});
});
