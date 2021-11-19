import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome to {{name}}
  </h2>
  <button (click)=onClick($event)>Greet</button>
  {{greetings}}
  <button (click)="greetings='Welcome to Angular'">Greet</button>
  <input #myInput type="text">
  <button (click)=logMessage(myInput.value)>log</button>

  <input [(ngModel)]="message" type="text">
  {{message}}
  // <h2>{{5-2}}</h2>
  // <h2>{{"My Name is "+ name}}</h2>
  // <h2>{{name.length}}</h2>
  // <h2>{{name.toUpperCase()}}</h2>
  // <h2>{{greetUser()}}</h2>
  // <h2 class="test-success">{{name}}</h2>
  // <h2 [class]="successClass">{{name}}</h2>
  // <h2 [class.test-fail]="hasError">{{name}}</h2>

  // <input [id] = "myId" type="text" value="Srinivas">
  // <input bind-disabled="isDisabled" type="text" value="Srinivas">
  // <h2 [ngClass]="messageClasses">Srinivas</h2>

  // <h2 [style.color]="'orange'">Style Binding</h2>
  // <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
  // <h2 [style.color]="hilightColor">Style Binding 3</h2>
  // <h2 [ngStyle]="titleClasses">Style Binding 4</h2>
  `
  ,
  styles: [`
  .test-success {
    color:green;
  }
  .test-fail {
    color:red;
  }
  .test-special {
    font-style:italic;
  }

  `]
})
export class TestComponent implements OnInit {

  public message ="";
  public name ="Cherry"
  public myId ="testID"
  public isDisabled = false;
  public successClass = "test-success";
  public hasError = true;
  public isSpecial = true;
  public hilightColor ="orange"
  public messageClasses ={
    "test-success":!this.hasError,
    "test-fail":this.hasError,
    "test-special":this.isSpecial
  }
  public titleClasses={
    color:"blue",
    fontStyle:"italic"
  }

  public greetings= ''
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log(event);
    this.greetings ='Welcome to classes Angular';
  }
  logMessage(value:any){
    console.log(value);
  }
  greetUser(){
    return "Hello " + this.name;
  }
}
