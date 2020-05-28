import { each } from 'lodash';

export function fieldValuesChanged(current, original) {
	const keysCollection = [];
	const changed: boolean[] = [];

	each(current, (val, key) => {
		keysCollection.push(key);
	});

	keysCollection.forEach((el) => {
		changed.push(current[el] === original[el]);
	});

	return changed;
}
