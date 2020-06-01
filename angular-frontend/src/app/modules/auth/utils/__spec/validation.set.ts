export const AUTH_FORMS_COMPARE = [
	{
		current: { username: 'admin', password: 'admin' },
		original: { username: '', password: '' },
		testName: 'changed and valid',
	},
	{
		current: { username: '', password: '' },
		original: { username: '', password: '' },
		testName: `doesn't changed and invalid`,
	},
	{
		current: { username: '  ', password: '  ' },
		original: { username: '', password: '' },
		testName: `changed and invalid`,
	},
];
