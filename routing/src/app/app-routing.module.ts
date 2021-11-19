import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { LoadGuard } from './shared/load.guard';

const routes: Routes = [
  // { path: '', redirectTo:'/departments', pathMatch: 'full'},
  {
    path: 'login', 
    canLoad:[LoadGuard],
    loadChildren:() => import('./login/login/login.module').then(m=>m.LoginModule)
  },
  { path: 'departments', component: DepartmentListComponent, canActivate:[AuthGuard]},
  { path: 'departments/:id', component: DepartmentDetailsComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
    },
  { path: 'employees', component: EmployeeListComponent},
  { path: "**", component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[DepartmentListComponent, 
                                EmployeeListComponent, 
                                PageNotFoundComponent, 
                                DepartmentDetailsComponent,
                                DepartmentOverviewComponent,
                                DepartmentContactComponent]
