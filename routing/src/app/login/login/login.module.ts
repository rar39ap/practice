import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { LoginRoutingModule } from './employee-login/login-routing.module';




@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
    
  ]
})
export class LoginModule { }
