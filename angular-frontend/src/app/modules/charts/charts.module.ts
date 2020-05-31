import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsWrapperComponent } from './components/charts-wrapper/charts-wrapper.component';
import { MaterialModule } from '../material/material.module';
import { MyLineChartComponent } from './components/my-line-chart/my-line-chart.component';
import { MyDoughnutChartComponent } from './components/my-doughnut-chart/my-doughnut-chart.component';
import { MyDynamicChartComponent } from './components/my-dynamic-chart/my-dynamic-chart.component';

@NgModule({
	declarations: [ChartsWrapperComponent, MyLineChartComponent, MyDoughnutChartComponent, MyDynamicChartComponent],
	imports: [CommonModule, ChartsRoutingModule, MaterialModule, ChartsModule],
})
export class ChartsMainModule {}
