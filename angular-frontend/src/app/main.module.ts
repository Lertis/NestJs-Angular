import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppStateModule } from './state/app.state.module';
import { MainRoutingModule } from './main-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { MainComponent } from './main.component';
import { TopToolbarComponent } from './shared/components/top-toolbar/top-toolbar.component';
import { MaterialModule } from './modules/material/material.module';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ApiService } from './shared/services/api.service';
import { MainHttpInterceptor } from './shared/interceptors/main.http.interceptor';
import { RedirectService } from './shared/services/redirect.service';
import { ConfirmationPopUpComponent } from './shared/components/confirmation-pop-up/confirmation-pop-up.component';

@NgModule({
	declarations: [
		MainComponent,
		TopToolbarComponent,
		SpinnerComponent,
		ConfirmationPopUpComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		MainRoutingModule,
		BrowserAnimationsModule,
		AppStateModule,
		ProductsModule,
		MaterialModule
	],
	providers: [
		ApiService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MainHttpInterceptor,
			multi: true
		},
		RedirectService
	],
	bootstrap: [MainComponent]
})
export class MainModule { }
