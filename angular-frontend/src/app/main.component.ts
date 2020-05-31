import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RedirectService } from './shared/services/redirect.service';

@Component({
	selector: 'app-root',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
	mobileQuery: MediaQueryList;
	private mobileQueryListener: () => void;
	fillerNav: { text: string; link: string }[] = [
		{
			text: 'Products',
			link: `products`,
		},
		{
			text: 'Charts',
			link: 'charts',
		},
		{
			text: `About`,
			link: `about`,
		},
	];

	constructor(
		private readonly changeDetectorRef: ChangeDetectorRef,
		private readonly media: MediaMatcher,
		public readonly redirectService: RedirectService,
		private readonly router: Router
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addEventListener('change', this.mobileQueryListener);
	}

	public showAddComponent() {
		return this.router.url === '/products';
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
	}
}
