import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: 'login', component:LoginComponent, canActivate: [AuthGuard]
  },
  {
    path: '', component:HomeComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'login/success', component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
