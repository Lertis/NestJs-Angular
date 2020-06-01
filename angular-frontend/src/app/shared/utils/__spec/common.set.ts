export const FORMS_COMPARE = [
	{
		current: { description: 'desc', price: 2, title: 'title' },
		original: { description: 'desc', price: 1, title: 'title' },
		testName: '1',
		res: [true, false, true],
	},
	{
		current: { description: 'desc1', price: 2, title: 'title' },
		original: { description: 'desc', price: 1, title: 'title' },
		testName: '2',
		res: [false, false, true],
	},
	{
		current: { description: 'desc', price: 2, title: 'title1' },
		original: { description: 'desc', price: 1, title: 'title' },
		testName: '3',
		res: [true, false, false],
	},
	{
		current: { description: '', price: 1, title: 'title' },
		original: { description: 'desc', price: 2, title: 'title' },
		testName: '4',
		res: [false, false, true],
	},
	{
		current: { description: 'describe', price: 1, title: '' },
		original: { description: 'desc', price: 2, title: 'title' },
		testName: '5',
		res: [false, false, false],
	},
	{
		current: { description: '', price: 1, title: '' },
		original: { description: 'desc', price: 2, title: 'title' },
		testName: '6',
		res: [false, false, false],
	},
];
