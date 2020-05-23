import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { ProductsEffects } from './effects/products.effects';


@NgModule({
	imports: [
		StoreModule.forFeature('products', productsReducer),
		EffectsModule.forFeature([ProductsEffects])
	]
})

export class ProductsStateModule { }
