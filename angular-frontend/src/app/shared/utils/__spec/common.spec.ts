import { FORMS_COMPARE } from './common.set';
import { fieldValuesChanged } from '../common';

declare const expect: jest.Expect;

describe('[Function]: fieldValuesChanged', () => {
	FORMS_COMPARE.forEach((test) => {
		it(test.testName, () => {
			const result = fieldValuesChanged(test.current, test.original);
			expect(result).toMatchSnapshot();
		});
	});
});
