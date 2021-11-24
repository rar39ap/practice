import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

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
    path:'login/success', component: SuccessComponent
  },
  {
    path: 'success', component:SuccessComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  username: any;
}
