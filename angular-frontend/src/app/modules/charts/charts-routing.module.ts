import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsWrapperComponent } from './components/charts-wrapper/charts-wrapper.component';
import { AuthGuard } from '../../shared/guards/auth.guards';

const routes: Routes = [
	{
		path: '',
		component: ChartsWrapperComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChartsRoutingModule {}
