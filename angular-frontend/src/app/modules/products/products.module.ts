import { NgModule } from '@angular/core';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		ProductsWrapperComponent,
		ProductComponent,
		ProductListComponent,
		ProductAddComponent,
		ProductUpdateComponent
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
