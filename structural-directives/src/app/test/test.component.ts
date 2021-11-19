import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';



@Component({
  selector: 'app-test',
  template: `
  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
  <div>Conditional</div>
  </ng-template>
  <ng-template #elseBlock>
  <div>Name is Hidden</div>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'" [style.color]="color">you picked red</div>
    <div *ngSwitchCase="'blue'" [style.color]="color">you picked blue</div>
    <div *ngSwitchCase="'green'" [style.color]="color">you picked green</div>
    <div *ngSwitchDefault>Pick Again</div>
  </div>

  <div *ngFor="let color of colors" >
    <h2>{{color}}</h2>
  </div>

 <h1>{{"Hello " + name}}</h1>
  <button (click)="fireEvent()">Send Event</button>

  <h2>{{intro}}</h2>
  <h2>{{intro | lowercase}}</h2>
  <h2>{{intro | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{intro | slice:3}}</h2>
  <h2>{{intro | slice:1:4}}</h2>
  <h2>{{person | json}}</h2>

  <h2>{{5.435 | number:'1.1-3' }}</h2>
  <h2>{{5.435 | number:'3.1-3' }}</h2>
  <h2>{{5.435 | number:'3.1-2' }}</h2>

  <h2>{{5.435 | currency }}</h2>
  <h2>{{5.435 | currency:'INR' }}</h2>

  <h2>{{ date }}</h2>
  <h2>{{ date | date:'short'}}</h2>


  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  displayName = true;
  public date = new Date();
  public color = "green";
  public colors =["orange", "red", "blue", "green"];
  public intro ="Srinivasa reddy"
  public message ="working in wipro Tech"
  public person ={
    firstName:"Cherry",
    lastNmae:"ramala"
  }

  @Input('parentData') public name:any;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Hey cherry it's Test")
  }

}
