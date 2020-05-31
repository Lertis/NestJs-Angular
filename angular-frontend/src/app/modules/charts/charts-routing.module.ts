import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsWrapperComponent } from './components/charts-wrapper/charts-wrapper.component';

const routes: Routes = [
	{
		path: '',
		component: ChartsWrapperComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChartsRoutingModule {}
