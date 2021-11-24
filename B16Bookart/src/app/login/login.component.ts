import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteGuradService } from '../shared/route-gurad.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  myName:any;
  myPassword:any;

  constructor(private route: Router, private service:RouteGuradService) { }

  ngOnInit(): void {
  }
  buttonClick(username:any,password:any){
    // if(c===this.username && d===this.password){
    //   localStorage.setItem("log in success", "true")
    //   console.log(localStorage.getItem("log in success"))
    //   this.route.navigate(['login/success'])
    // } else {
    //   console.log("check the credentials")
    // }
  let body = {
    "userId": 1,
    "firstName": "srinivas",
    "lastName": "r",
    "username": username,
    "password": password,
    "gender": "male",
    "userTypeId": 1
  }

 this.service.logIn(body).subscribe(Response=> {
   let res:any =Response
  //  console.log(Response)
   
     localStorage.setItem("username", res["userDetails"]["username"])
    localStorage.setItem("token",res["token"])
    this.route.navigate(['login/success'])
   
 }, (error=> console.log(error))
 )
  
}
  

}
