import { Injectable, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
	canActivate(): boolean | Promise<boolean> | Observable<boolean> {
		return true;
	}
}
