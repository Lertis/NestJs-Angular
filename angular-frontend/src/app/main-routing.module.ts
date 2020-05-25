import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductsWrapperComponent } from './modules/products/components/products-wrapper/products-wrapper.component';
import { ProductAddComponent } from './modules/products/components/product-add/product-add.component';
import { ProductUpdateComponent } from './modules/products/components/product-update/product-update.component';


const routes: Routes = [
	{ path: '', redirectTo: 'products', pathMatch: 'full' },
	{ path: 'products', component: ProductsWrapperComponent },
	{ path: 'products/add', component: ProductAddComponent },
	{ path: 'products/update/:id', component: ProductUpdateComponent },
	{ path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }
