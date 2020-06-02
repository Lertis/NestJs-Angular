import { dynamicChartLabel, randomNumber } from '../common';
import { VALUES_FOR_RANDOM_NUMBERS } from './common.set';

describe('[Function]: dynamicChartLabel', () => {
	it('lenght of the label should be 5', () => {
		for (let i = 0; i < 10; i++) {
			const result = dynamicChartLabel();
			expect(result.length).toEqual(5);
		}
	});

	it('lenght of the label should be equal the input value', () => {
		for (let i = 1; i < 10; i++) {
			const result = dynamicChartLabel(i);
			expect(result.length).toEqual(i);
		}
	});
});

// TODO: sometimes min can be greater than max! -> write test
describe('[Function]: randomNumber', () => {
	VALUES_FOR_RANDOM_NUMBERS.forEach((test) => {
		it(`number should be in range of ${test.min} - ${test.max}`, () => {
			const result = randomNumber(test.min, test.max);
			if (test.max < test.min) {
				expect(result).toBeLessThanOrEqual(test.min);
				expect(result).toBeGreaterThanOrEqual(test.max);
			} else {
				expect(result).toBeLessThanOrEqual(test.max);
				expect(result).toBeGreaterThanOrEqual(test.min);
			}
		});
	});
});
