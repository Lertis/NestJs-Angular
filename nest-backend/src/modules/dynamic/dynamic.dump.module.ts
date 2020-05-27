import { Module, Global, DynamicModule } from '@nestjs/common';
import { DynamicDumpController } from './dynamic.dump.controller';
import { DynamicDumpService } from './dynamic.dump.service';

@Global()
@Module({
	controllers: [DynamicDumpController],
	providers: [DynamicDumpService],
	exports: [DynamicDumpService],
})
export class DynamicDumpModule {
	static forRoot(): DynamicModule {
		console.log('DYNAMIC MODULE HAS BEEN SUCCESSFULLY ADDED!!!');
		return {
			module: DynamicDumpModule,
			providers: [],
			exports: [],
		};
	}
}
