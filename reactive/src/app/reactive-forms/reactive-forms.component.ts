import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SampleService } from 'src/environments/services/sample.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });

  constructor(private sampleService: SampleService) { }

  ngOnInit(): void {
    this.sampleService.getData().subscribe(console.log)
  }

  submit() {
    console.log(this.registerForm.value);
  }

}
