import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class RedirectService {

	constructor(private readonly router: Router) { }

	public redirectTo(url: string, extras?: NavigationExtras) {
		this.router.navigate([url], extras ? extras : null);
	}
}
