import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsWrapperComponent } from './components/products-wrapper/products-wrapper.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';


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
		ReactiveFormsModule,
		SharedModule
	],
	providers: [],
	exports: [ProductsWrapperComponent]
})
export class ProductsModule { }
