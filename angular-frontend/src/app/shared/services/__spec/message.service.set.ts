import { ToastTypes, IToastMessage } from '../../../models/entities';

export const MESSAGE_PRIMENG_API: IToastMessage = {
	type: ToastTypes.Success,
	detail: 'Product has been successfully created',
	summary: `Product # 1 created`,
};

export const MESSAGE_PRIMENG_API_COLLECTION: IToastMessage[] = [
	MESSAGE_PRIMENG_API,
	{
		type: ToastTypes.Warn,
		detail: 'Warning',
		summary: `Message`,
	},
	{
		type: ToastTypes.Info,
		detail: 'Info',
		summary: `Info`,
	},
	{
		type: ToastTypes.Error,
		detail: 'Error',
		summary: `Error`,
	},
];
