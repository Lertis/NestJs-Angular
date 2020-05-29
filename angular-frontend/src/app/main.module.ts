import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppStateModule } from './state/app.state.module';
import { MainRoutingModule } from './main-routing.module';
import { ProductsModule } from './modules/products/products.module';

import { MainComponent } from './main.component';
import { MaterialModule } from './modules/material/material.module';
import { ApiService } from './shared/services/api.service';
import { MainHttpInterceptor } from './shared/interceptors/main.http.interceptor';
import { RedirectService } from './shared/services/redirect.service';
import { ConfirmationPopUpComponent } from './shared/components/confirmation-pop-up/confirmation-pop-up.component';
import { PrimeNgModule } from './modules/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { MessageToastService } from './shared/services/message.service';
import { SharedModule } from './shared/shared.module';
import { RedirectGuard } from './shared/guards/redirect.guard';
import { AuthStateService } from './shared/services/auth.state.service';
import { AuthGuard } from './shared/guards/auth.guards';

@NgModule({
	declarations: [MainComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		MainRoutingModule,
		BrowserAnimationsModule,
		AppStateModule,
		ProductsModule,
		MaterialModule,
		PrimeNgModule,
		SharedModule,
	],
	providers: [
		ApiService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MainHttpInterceptor,
			multi: true,
		},
		RedirectService,
		MessageToastService,
		MessageService,
		RedirectGuard,
		AuthStateService,
		AuthGuard,
	],
	bootstrap: [MainComponent],
})
export class MainModule {}
