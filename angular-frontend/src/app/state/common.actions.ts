import { createAction, props } from '@ngrx/store';

export const apiError = createAction('API.ERROR', props<{ err: any }>());
