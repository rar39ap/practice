import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public username = 'srinivasa'
  public password = '12345'

  myName = 'srinivasa'
  myPassword ='12345'
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  buttonClick(a:any,b:any){
    if(a===this.username && b === this.password){
      localStorage.setItem("log in success", "true")
      console.log(localStorage.getItem("log in success"))
      this.route.navigate(['/dashboard'])
    } else {
      this.route.navigate(['/login'])
      console.log("check the credentials")
    }
  
 
  
}
}
