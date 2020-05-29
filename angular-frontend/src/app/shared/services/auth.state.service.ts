import { Injectable } from '@angular/core';

@Injectable()
export class AuthStateService {
	private isLogined = false;

	setLoginedStatus(status: boolean) {
		this.isLogined = status;
	}

	getLoginedStatus(): boolean {
		return this.isLogined;
	}
}
