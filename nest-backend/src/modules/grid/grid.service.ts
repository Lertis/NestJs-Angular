import { Injectable } from '@nestjs/common';
import { GRID_MOCK } from './grid.mock';

@Injectable()
export class GridService {
	private readonly gridMock = Object.assign({}, GRID_MOCK);

	getGridMockData() {
		return this.gridMock;
	}
}
