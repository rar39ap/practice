import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>Department List</h3>
    <ul >
    <li (click)="onSelect(department)"  [class.selected]="isSelected(department)" *ngFor="let department of departments">
    <span class="button">{{department.id}}</span>{{department.name}}
    </li>
    </ul>
  `,
  styles: [`
  .button {
    background-color: #4CAF50; /* Green */
    border: 1px solid green;
    color: white;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    width: 30px;
    display: block;
    
  }
  `
      
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectID: any;
  departments =[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"react"},
    {"id":3, "name":"bootstrap"},
    {"id":4, "name":"oracle"},
    {"id":5, "name":"MangoDB"}

  ]
  department: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{
      this.selectID = +params['id'];
    });
  }
  onSelect(department:any){
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department:any){
    return department.id === this.selectID;
  }
}
