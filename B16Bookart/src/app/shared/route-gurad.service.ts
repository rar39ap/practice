import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuradService {
  _url = "https://bookcart.azurewebsites.net/api/Login"

  constructor(private http: HttpClient) { }
  
  logIn(body:any){
    return this.http.post(this._url, body)
  }
  loggedIn(){
    return localStorage.getItem("token")
  }
  
}
