import { each } from 'lodash';

export function productProfileValidation(
	current: { description: string, price: number, title: string },
	original: { description: string, price: number, title: string }) {

	const valid: boolean[] = [
		!!current.description && current.description.trim().length !== 0 && current.description !== '',
		!!current.title && current.title.trim().length !== 0 && current.title !== '',
		current.price !== 0
	];

	const keysCollection = [];
	const changed: boolean[] = [];

	each(current, (val, key) => {
		keysCollection.push(key);
	});

	keysCollection.forEach((el) => {
		changed.push(current[el] === original[el]);
	});

	return {
		valid: valid.every((flag: boolean) => flag),
		changed: changed.some((flag: boolean) => !flag)
	};
}
