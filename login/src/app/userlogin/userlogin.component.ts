import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signInData } from '../model/signindata';

import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm : NgForm){
    console.log(signInForm.value);
    // const singnInData = new signInData(signInForm.value.username, signInForm.value.password)
    // this.authenticationService.authenticated(singnInData)
  }
}
