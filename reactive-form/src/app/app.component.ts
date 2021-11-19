import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { passwordValidate } from './shared/password-validation';
import { nameValidation } from './shared/user-validators';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  registrationForm!: FormGroup; 
  
  get alternateEmail(){
    return this.registrationForm.get('alternateEmail') as FormArray;
  }
  addAlternateEmail(){
    this.alternateEmail.push(this.fb.control(''));
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

constructor(private fb: FormBuilder, private _registerService:RegisterService ){}

ngOnInit(){
  this.registrationForm = this.fb.group({
    userName:['Srinivas', [Validators.required, Validators.minLength(3), nameValidation(/password/)]],
    email:[''],
    subscribe:[false],
    password:[''],
    confirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    }),
    alternateEmail: this.fb.array([])
  }, {Validator : passwordValidate});

  this.registrationForm.get('subscribe')?.valueChanges .subscribe( (checkedValue: any) => {
    const email = this.registrationForm.get('email');
    if(checkedValue){
      email?.setValidators(Validators.required);
    }else {
      email?.clearValidators();
    }
    email?.updateValueAndValidity();
  })
}



  // registrationForm = new FormGroup({
  //   username : new FormControl('Srinivas', Validators.required),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadAPI(){
    this.registrationForm.patchValue({
      username: 'Srinivas',
      password: 'test',
      confirmPassword: 'test',
      address:{
        city:'City',
        state:'State',
        postalCode: '12345'
      }
    })
  }
  // loadAPI(){
  //   this.registrationForm.setValue({
  //     username: 'Srinivas',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     address:{
  //       city:'City',
  //       state:'State',
  //       postalCode: '12345'
  //     }
  //   })
  // }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registerService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('SUccess!', response),
        error => console.log('error!', error)
        
      );
  }
}
