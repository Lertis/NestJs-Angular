import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		console.log('Start request...');

		const now = Date.now();
		return next.handle().pipe(tap(() => console.log(`It takes: ${Date.now() - now}ms`)));
	}
}
