import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		AboutRoutingModule
	],
	exports: [AboutComponent]
})
export class AboutModule { }
