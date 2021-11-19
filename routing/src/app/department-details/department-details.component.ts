import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      you selected department with id = {{departmentID}}
    </p>
    <p>
    <button (click)="gotoOverview()">Overview</button>
    <button (click)="gotoContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
    <button (click)="gotoDepartment()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentID: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // var id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;

    // this.route.paramMap.subscribe((params: ParamMap)=>{
    //   var id = params.get('id');
    //   this.departmentID = id;

    // });
    this.route.params.subscribe((params: Params)=>{
      this.departmentID = +params['id'];
    });

    }
    
    goPrevious(){
      let previousID = this.departmentID - 1;
      this.router.navigate(['/departments', previousID]);
    }
    goNext(){
      let nextID = this.departmentID + 1;
      this.router.navigate(['/departments', nextID]);
    }
    gotoDepartment(){
      let selectID = this.departmentID ? this.departmentID : null;
      // this.router.navigate(['/departments', {id : selectID}])

      this.router.navigate(['../', {id : selectID}],{relativeTo: this.route});
    }
    gotoOverview(){
      this.router.navigate(['overview'], {relativeTo: this.route})
    }
    gotoContact(){
      this.router.navigate(['contact'], {relativeTo: this.route})
    }
}
