import { NgModule } from '@angular/core';
import { ConfirmationPopUpComponent } from './components/confirmation-pop-up/confirmation-pop-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from '../modules/material/material.module';
import { OneComponent } from './components/__spec/one/one.component';

@NgModule({
	declarations: [ConfirmationPopUpComponent, NotFoundComponent, SpinnerComponent, OneComponent],
	imports: [MaterialModule],
	providers: [],
	exports: [ConfirmationPopUpComponent, NotFoundComponent, SpinnerComponent],
})
export class SharedModule {}
