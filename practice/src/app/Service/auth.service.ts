import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthentic: boolean = true;
  constructor(private http: HttpClient) { }
  isAuthenticated(){
    return this.http.post<any>('https://bookcart.azurewebsites.net/api/login',{"username":"balajimohan", "password":"Balajivelu147"})
    // return this.isAuthentic;
  }
}
