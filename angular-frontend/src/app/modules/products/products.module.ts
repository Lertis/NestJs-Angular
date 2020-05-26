import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@NgModule({
	declarations: [
		ProductsWrapperComponent,
		ProductComponent,
		ProductListComponent,
		ProductAddComponent,
		ProductUpdateComponent,
		SpinnerComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	exports: [ProductsWrapperComponent]
})
export class ProductsModule { }
