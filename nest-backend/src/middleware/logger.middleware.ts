import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from '../modules/logger/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	constructor(private readonly logger: LoggerService) {
		this.logger.setPrefix('Nest.js + Angular');
	}
	use(req: Request, res: Response, next: Function) {
		this.logger.log(`Method: ${req.method} to the URL ${req.url}`);
		this.logger.log(`Request comes from ${req.headers.host}`);
		next();
	}
}
