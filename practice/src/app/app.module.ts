import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ListSubjectsComponent,
    AddSubjectComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    LoginModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
