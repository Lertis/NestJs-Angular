import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppStateModule } from './state/app.state.module';
import { MainRoutingModule } from './main-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { MainComponent } from './main.component';
import { TopToolbarComponent } from './shared/components/top-toolbar/top-toolbar.component';
import { MaterialModule } from './modules/material/material.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
	declarations: [
		MainComponent,
		TopToolbarComponent,
		SpinnerComponent
	],
	imports: [
		BrowserModule,
		MainRoutingModule,
		BrowserAnimationsModule,
		AppStateModule,
		ProductsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [MainComponent]
})
export class MainModule { }
