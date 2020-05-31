import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

const materialModules = [
	MatButtonModule,
	MatToolbarModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatGridListModule,
	MatDialogModule,
	MatInputModule,
	MatSidenavModule,
	MatListModule,
	MatTabsModule,
];

@NgModule({
	imports: [...materialModules],
	exports: [...materialModules],
})
export class MaterialModule {}
