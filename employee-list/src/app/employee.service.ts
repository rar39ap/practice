import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { IEmployee } from './employee';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string="/assets/data/employees.json";

  constructor( private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    ;
                       

}
// errorHandler(error: HttpErrorResponse){
//   return Observable.throw(error.message || "server error");
  
// }
  

}
