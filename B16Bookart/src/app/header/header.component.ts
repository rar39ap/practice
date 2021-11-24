import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onCheckOut(){
    let token = localStorage.getItem("token")
    if(token){
      this.route.navigate(["/dashboard"])
    }else {
      this.route.navigate(["/login"])
    }
  }
}
