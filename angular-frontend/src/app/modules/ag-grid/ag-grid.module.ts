import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import '@ag-grid-enterprise/all-modules';
import { AgGridModule } from '@ag-grid-community/angular';
import { VideosComponent } from './components/videos/videos.component';
import { HeaderCheckboxComponent } from './components/header-checkbox/header-checkbox.component';
import { HeaderGroupComponent } from './components/header-group/header-group.component';
import { RowCheckboxComponent } from './components/row-checkbox/row-checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AgGridRoutingModule } from './ag-grid-routing.module';
import { FetchService } from './services/fetch.service';
import { CheckboxCommunicationService } from './services/checkbox.communication.service';

@NgModule({
	declarations: [VideosComponent, HeaderCheckboxComponent, HeaderGroupComponent, RowCheckboxComponent],
	imports: [
		CommonModule,
		AgGridRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MaterialModule,
		AgGridModule.withComponents([RowCheckboxComponent, HeaderGroupComponent, HeaderCheckboxComponent]),
	],
	providers: [FetchService, CheckboxCommunicationService],
})
export class AgMainGridModule {}
