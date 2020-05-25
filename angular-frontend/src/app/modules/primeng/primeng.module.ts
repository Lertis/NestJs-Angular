import { NgModule } from '@angular/core';
import {ToastModule} from 'primeng/toast';

const primeNgModules = [ToastModule];

@NgModule({
	imports: [...primeNgModules],
	exports: [...primeNgModules]
})
export class PrimeNgModule { }
