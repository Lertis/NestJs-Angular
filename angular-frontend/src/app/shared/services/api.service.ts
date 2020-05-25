import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface IHttpOptions {
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	observe?: 'body';
	params?: HttpParams | {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
}

@Injectable()
export class ApiService {
	private readonly BASE_URI = 'http://localhost:3000';

	constructor(private readonly http: HttpClient) { }

	public getRequest<T>(url: string, options?: IHttpOptions) {
		return this.http.get<T>(`${this.BASE_URI}/${url}`, options);
	}

	public postRequest<T>(url: string, body: T, options?: IHttpOptions) {
		return this.http.post<T>(`${this.BASE_URI}/${url}`, body, options);
	}

	public putRequest<T>(url: string, body: T, options?: IHttpOptions) {
		return this.http.put<T>(`${this.BASE_URI}/${url}`, body, options);
	}

	public patchRequest<T>(url: string, body: T, options?: IHttpOptions) {
		return this.http.patch<T>(`${this.BASE_URI}/${url}`, body, options);
	}

	public deleteRequest<T>(url: string, options?: IHttpOptions) {
		return this.http.delete<T>(`${this.BASE_URI}/${url}`, options);
	}
}
