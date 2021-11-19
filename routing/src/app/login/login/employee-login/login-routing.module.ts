import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login.component';
// import { LoginComponent } from './login/login.component';
// import { ResetComponent } from './reset/reset.component';
// import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: 'employeelogin', component:EmployeeLoginComponent
    }
//   {path: 'signup', component: SignupComponent},
//   {path: 'reset', component: ResetComponent},
//   {path: '', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}