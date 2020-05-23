import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppStateModule } from './state/app.state.module';
import { MainRoutingModule } from './main-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { MainComponent } from './main.component';

@NgModule({
	declarations: [
		MainComponent
	],
	imports: [
		BrowserModule,
		MainRoutingModule,
		BrowserAnimationsModule,
		AppStateModule,
		ProductsModule
	],
	providers: [],
	bootstrap: [MainComponent]
})
export class MainModule { }
