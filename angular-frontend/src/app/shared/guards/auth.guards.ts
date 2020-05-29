import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from '../../shared/services/auth.state.service';
import { RedirectService } from '../services/redirect.service';
import { MessageToastService } from '../services/message.service';
import { IToastMessage, ToastTypes } from '../../models/entities';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private readonly authState: AuthStateService,
		private readonly redirestService: RedirectService,
		private readonly messageService: MessageToastService
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authState.getLoginedStatus() ? true : this.userNotLogged();
	}

	private userNotLogged() {
		const successMessage: IToastMessage = {
			type: ToastTypes.Warn,
			detail: 'You are not logged',
			summary: 'Warning!',
		};
		this.messageService.addSingle(successMessage);
		this.redirestService.redirectTo('auth/login', { replaceUrl: true });
		return false;
	}
}
