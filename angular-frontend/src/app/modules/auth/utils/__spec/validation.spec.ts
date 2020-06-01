import { AUTH_FORMS_COMPARE } from './validation.set';
import { authFormValidation } from '../validation';

declare const expect: jest.Expect;

describe('[Function]: authFormValidation', () => {
	AUTH_FORMS_COMPARE.forEach((test) => {
		it(test.testName, () => {
			const result = authFormValidation(test.current, test.original);
			expect(result).toMatchSnapshot();
		});
	});
});
