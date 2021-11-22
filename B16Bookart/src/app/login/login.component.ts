import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = 'srinivasa'
  public password = '12345'

  myName = 'srinivasa'
  myPassword ='12345'

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  buttonClick(c:any,d:any){
    if(c===this.username && d===this.password){
      localStorage.setItem("log in success", "true")
      console.log(localStorage.getItem("log in success"))
      this.route.navigate(['login/success'])
    } else {
      console.log("check the credentials")
    }
  
 
  
}
  

}
