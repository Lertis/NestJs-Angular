export enum CommonColors {
	Primary = 'primary',
	Accent = 'accent',
	Warn = 'warn'
}

export enum SpinnerTypes {
	Determinate = 'determinate',
	Indeterminate = 'indeterminate'
}

export enum ToastTypes {
	Success = 'success',
	Warn = 'warn',
	Info = 'info',
	Error = 'error'
}

export interface IToastMessage {
	type: ToastTypes;
	summary: string;
	detail: string;
}
