import { Controller, Get } from '@nestjs/common';

import { DynamicDumpService } from './dynamic.dump.service';

@Controller('dynamic')
export class DynamicDumpController {
	constructor(private readonly dumpService: DynamicDumpService) {}

	@Get()
	getDummyData() {
		return this.dumpService.dummyInfo();
	}
}
