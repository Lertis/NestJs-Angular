import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';
import { RedirectService } from '../../shared/services/redirect.service';
import { AuthStateService } from '../../shared/services/auth.state.service';

@NgModule({
	declarations: [RegistrationComponent, LoginComponent],
	imports: [CommonModule, AuthRoutingModule, MaterialModule, ReactiveFormsModule, FormsModule],
	providers: [RedirectService, AuthStateService],
})
export class AuthModule {}
