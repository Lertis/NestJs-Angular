import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
	selector: 'app-my-doughnut-chart',
	templateUrl: './my-doughnut-chart.component.html',
	styleUrls: ['./my-doughnut-chart.component.scss'],
})
export class MyDoughnutChartComponent {
	public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData: MultiDataSet = [
		[350, 450, 100],
		[50, 150, 120],
		[250, 130, 70],
	];
	public doughnutChartType: ChartType = 'doughnut';
}
