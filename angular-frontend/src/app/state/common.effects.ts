import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import * as actions from './common.actions';
import { ApiService } from '../shared/services/api.service';
import { throwError, onErrorResumeNext, EMPTY, Observable } from 'rxjs';

@Injectable()
export class CommonEffects {
	constructor(private readonly actions$: Actions, private readonly api: ApiService) {}

	public readonly dashboardsCollectionRequest$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(actions.apiError),
				tap((payload: { err: any }) => {
					console.error(payload.err);
				})
			),
		{ dispatch: false }
	);

	public readonly actionRequest$ = createEffect(() =>
		this.actions$.pipe(
			ofType(actions.actionRequest),
			switchMap(
				(prm: { url: string; params: any; resActions: (res: any) => Action[]; errorActions: (res: any) => Action[] }) =>
					this.api.postRequest<any>(prm.url, prm.params).pipe(
						map((res) => {
							return { res, prm };
						}),
						catchError((res) => {
							return throwError({ res, prm });
						}),
						mergeMap(
							(x: {
								res: any;
								prm: {
									url: string;
									method: string;
									params: any;
									resActions: (res: any) => Action[];
									errorActions: (res: any) => Action[];
								};
							}) => {
								return [...x.prm.resActions(x.res)];
							}
						),
						catchError((err) => {
							const errActions: Action[] = err.prm.errorActions(err.res);
							if (errActions && errActions.length > 0) {
								return [...errActions];
							} else {
								return [];
							}
						})
					) // as Observable<Action>
			)
		)
	);
}
