import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  model: any ={};
  isSubmitted: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
  }
  submit(){
    this.isSubmitted=true;
  }

}
