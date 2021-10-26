import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    SignupComponent,
    ResetComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
