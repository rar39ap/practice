import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';



const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'success', component: SuccessComponent
  },
  {
    path:'success/login', component: SuccessComponent
  },
  {
    path: 'success', component:SuccessComponent
  },
  {path: '', redirectTo:'header' , pathMatch:'full'},
  {path:'header', component:HeaderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  username: any;
}
