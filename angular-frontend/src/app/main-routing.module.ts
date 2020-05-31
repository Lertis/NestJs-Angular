import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductsWrapperComponent } from './modules/products/components/products-wrapper/products-wrapper.component';
import { ProductAddComponent } from './modules/products/components/product-add/product-add.component';
import { ProductUpdateComponent } from './modules/products/components/product-update/product-update.component';
import { RedirectGuard } from './shared/guards/redirect.guard';
import { AuthGuard } from './shared/guards/auth.guards';

const routes: Routes = [
	{ path: '', redirectTo: 'products', pathMatch: 'full' },
	{ path: 'products', component: ProductsWrapperComponent, canActivate: [AuthGuard] },
	{ path: 'products/add', component: ProductAddComponent },
	{ path: 'products/update/:id', component: ProductUpdateComponent, canActivate: [RedirectGuard] },
	{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
	{ path: 'about', loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule) },
	{ path: 'charts', loadChildren: () => import('./modules/charts/charts.module').then((m) => m.ChartsMainModule) },
	{ path: 'grid', loadChildren: () => import('./modules/ag-grid/ag-grid.module').then((m) => m.AgMainGridModule) },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class MainRoutingModule {}
