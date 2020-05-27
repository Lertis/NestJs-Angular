import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicDumpService {
	dummyInfo() {
		return 'I DO NOTHING, BUT I AM DYNAMIC!';
	}
}
