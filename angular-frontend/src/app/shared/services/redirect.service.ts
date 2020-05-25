import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class RedirectService {

	private readonly defaultNavigationExtras: NavigationExtras = {
		relativeTo:  null,
		queryParams: null,
		queryParamsHandling: null,
		preserveFragment: false,
		skipLocationChange: false,
		replaceUrl: false
	};

	constructor(private readonly router: Router) { }

	public redirectTo(url: string, extras?: NavigationExtras) {
		this.router.navigate([url], extras ? extras : this.defaultNavigationExtras);
	}
}
