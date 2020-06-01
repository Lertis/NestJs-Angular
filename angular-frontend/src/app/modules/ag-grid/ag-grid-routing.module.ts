import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { AuthGuard } from '../../shared/guards/auth.guards';

const routes: Routes = [{ path: '', component: VideosComponent, canActivate: [AuthGuard] }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AgGridRoutingModule {}
