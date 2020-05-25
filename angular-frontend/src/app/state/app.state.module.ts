import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsStateModule } from '../modules/products/store/products.state.module';
import { CommonEffects } from './common.effects';


@NgModule({
	imports: [
		StoreModule.forRoot({}),
		StoreDevtoolsModule.instrument({
			maxAge: 50
		}),
		EffectsModule.forRoot([CommonEffects]),
		ProductsStateModule
	]
})

export class AppStateModule { }
