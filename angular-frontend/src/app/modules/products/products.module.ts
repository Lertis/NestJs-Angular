import { NgModule } from '@angular/core';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
	declarations: [
		ProductsWrapperComponent,
		ProductComponent,
		ProductListComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	providers: [],
	exports: [ProductsWrapperComponent]
})
export class ProductsModule { }
