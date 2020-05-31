import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsWrapperComponent } from './components/charts-wrapper/charts-wrapper.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [ChartsWrapperComponent],
	imports: [CommonModule, ChartsRoutingModule, MaterialModule, ChartsModule],
})
export class ChartsMainModule {}
