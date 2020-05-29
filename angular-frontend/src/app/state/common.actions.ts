import {createAction, props, Action} from '@ngrx/store';

export const apiError = createAction('API.ERROR', props<{err: any}>());
export const actionRequest = createAction(
	'ACTION.REQUEST',
	props<{
		url: string;
		params: any;
		resActions: (res) => Action[];
		errorActions: (res) => Action[];
	}>()
);
