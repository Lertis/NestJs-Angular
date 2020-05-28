import { each } from 'lodash';
import { fieldValuesChanged } from '../../../shared/utils/common';

export function authFormValidation(
	current: { username: string; password: string },
	original: { username: string; password: string }
) {
	const valid: boolean[] = [
		!!current.username && current.username.trim().length !== 0 && current.password !== '',
		!!current.password && current.password.trim().length !== 0 && current.password !== '',
	];

	const changed: boolean[] = fieldValuesChanged(current, original);

	return {
		valid: valid.every((flag: boolean) => flag),
		changed: changed.some((flag: boolean) => !flag),
	};
}
