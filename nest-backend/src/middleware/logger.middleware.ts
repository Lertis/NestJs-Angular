import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: Function) {
		console.log(`Method: ${req.method} to the URL ${req.url}`);
		console.log(`Request comes from ${req.headers.host}`);
		next();
	}
}
