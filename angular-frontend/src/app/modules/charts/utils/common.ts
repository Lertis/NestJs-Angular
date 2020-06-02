export function dynamicChartLabel(length = 5): string {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export function randomNumber(min: number, max: number): number {
	if (min > max) {
		[min, max] = [max, min];
	}
	return Math.floor(Math.random() * (max - min) + min);
}
