import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [
	MatButtonModule,
	MatToolbarModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatProgressSpinnerModule
];

@NgModule({
	imports: [...materialModules],
	exports: [...materialModules]
})
export class MaterialModule { }
