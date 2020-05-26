import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RedirectService } from '../services/redirect.service';
import { ApiService } from '../services/api.service';
import { IProduct } from '../../modules/products/entity/product.interface';
import { MessageToastService } from '../services/message.service';
import { IToastMessage, ToastTypes } from '../../models/entities';

@Injectable()
export class RedirectGuard implements CanActivate {
	constructor(
		private readonly redirectService: RedirectService,
		private readonly api: ApiService,
		private readonly message: MessageToastService
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.api.getRequest(`products/${next.params.id}`).pipe(
			map((prod: IProduct) => {
				if (prod) {
					return true;
				}
			}),
			catchError((err) => {
				const errorMessage: IToastMessage = {
					type: ToastTypes.Error,
					detail: `${err.error.message}`,
					summary: `# ${err.error.statusCode} ${err.error.error}`,
				};
				this.message.addSingle(errorMessage);
				this.redirectService.redirectTo('products', { replaceUrl: true });
				return of(false);
			})
		);
	}
}
