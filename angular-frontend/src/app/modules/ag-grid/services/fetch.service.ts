import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { Video } from '../models/video.model';

@Injectable()
export class FetchService {
	constructor(private readonly http: HttpClient) {}

	getAPIData(): Observable<Item[]> {
		return this.http.get<Video>(`grid`).pipe(map((data: Video) => data.items));
	}
}
