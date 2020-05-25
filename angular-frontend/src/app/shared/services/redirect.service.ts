import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectService {

	constructor(private readonly router: Router) { }

	public redirectTo(url: string) {
		this.router.navigate([url]);
	}
}
