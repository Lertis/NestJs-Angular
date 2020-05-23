import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state';

@Injectable()
export class ProductsEffects {
	constructor(private readonly actions$: Actions, public store: Store<AppState>) { }
}
