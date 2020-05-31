import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { timer, interval, Subject } from 'rxjs';
import { dynamicChartLabel, randomNumber } from '../../utils/common';
import { takeUntil } from 'rxjs/operators';
@Component({
	selector: 'app-my-dynamic-chart',
	templateUrl: './my-dynamic-chart.component.html',
	styleUrls: ['./my-dynamic-chart.component.scss'],
})
export class MyDynamicChartComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();
	@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

	constructor() {
		interval(1500)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.updateChart();
			});
	}
	public lineChartData: ChartDataSets[] = [
		{
			data: [15, 25],
			label: 'Series A',
		},
	];
	public lineChartLabels: Label[] = [dynamicChartLabel(), dynamicChartLabel()];
	public lineChartOptions: ChartOptions = {
		responsive: true,
	};
	public lineChartColors: Color[] = [
		{
			borderColor: 'black',
			backgroundColor: 'rgba(255,0,0,0.3)',
		},
	];
	public lineChartLegend = true;
	public lineChartType = 'line';
	public lineChartPlugins = [];

	private updateChart() {
		if (this.chart && this.chart.chart && this.chart.chart.config) {
			const newLabels = Object.assign([], this.chart.chart.config.data.labels);
			newLabels.push(dynamicChartLabel());
			this.chart.chart.config.data.labels = newLabels;
			const newDataSet = Object.assign([], this.chart.chart.config.data.datasets);
			newDataSet[0].data.push(randomNumber(1, 100));
			this.chart.chart.config.data.datasets = newDataSet;
			this.chart.chart.update();
		}
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
