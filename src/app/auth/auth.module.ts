import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {SharedModule} from '../shared/shared.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent, LandingComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
    UserPartsModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
