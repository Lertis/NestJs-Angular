import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {
	infoRun() {
		return 'YOU ARE WORKING WITH NEST.JS FRAMEWORK!';
	}
}
