import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as actions from './common.actions';


@Injectable()
export class CommonEffects {
	constructor(
		private readonly actions$: Actions
	) { }

	public readonly dashboardsCollectionRequest$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.apiError),
			tap((payload: { err: any }) => {
				console.error(payload.err);
			})
		), { dispatch: false }
	);
}
