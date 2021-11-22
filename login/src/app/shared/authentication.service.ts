import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthentic: boolean = true;

  constructor(private http: HttpClient) { }
  isAuthenticated(){
    return this.http.post<any>('https://bookcart.azurewebsites.net/api/login', {username: "rar39", password: "Srinivasa.39"})
    // return this.isAuthentic;
  }
}
