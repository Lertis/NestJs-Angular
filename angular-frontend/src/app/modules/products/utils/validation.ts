import { fieldValuesChanged } from '../../../shared/utils/common';

export function productProfileValidation(
	current: { description: string; price: number; title: string },
	original: { description: string; price: number; title: string }
) {
	const valid: boolean[] = [
		!!current.description && current.description.trim().length !== 0 && current.description !== '',
		!!current.title && current.title.trim().length !== 0 && current.title !== '',
		current.price !== 0,
	];

	const changed: boolean[] = fieldValuesChanged(current, original);

	return {
		valid: valid.every((flag: boolean) => flag),
		changed: changed.some((flag: boolean) => !flag),
	};
}
