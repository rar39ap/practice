import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { SampleService } from 'src/environments/services/sample.service';
import { comparePassword } from 'src/shared/comparePassword';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit, OnDestroy {

  isSubmitted: boolean = false;
  sample$ = of(1,2,3,4,5,6,7,8);
  countries = ['India', 'UK', 'USA'];
  // storeArray = [this.add()];

  private destroy$: BehaviorSubject<any> = new BehaviorSubject(null);

  registerForm = new FormGroup({
    name: new FormControl("srinivas", Validators.required),
    email: new FormControl('srinivas@gmail.com', [Validators.required, Validators.email]),
    createPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    country: new FormControl(''),
    gender: new FormControl(),

    // StoreDetails: new FormArray([])

  }, [comparePassword]);



  add(){
    return new FormGroup({
      storeName: new FormControl('srinivas',Validators.required),
      categories: new FormControl('srinivas',Validators.required),
    })
  }

  get s() {
    return (this.registerForm.controls['storeDetails'] as FormArray).controls
  }

  addItem(){
    (this.registerForm.controls['StoreDetails'] as FormArray).push(this.add());
    // this.storeArray.push(this.add());
  }
  removeItem(id: number){
    (this.registerForm.controls['StoreDetails'] as FormArray).removeAt(id);
    // this.storeArray.pop();
  }
  constructor() { }
 
  ngOnInit(): void {

    // this.registerForm.controls['name'].valueChanges.pipe(tap(x=>console.log(x))).subscribe();
    // this.registerForm.controls['name'].statusChanges.pipe(tap(x=>console.log(x))).subscribe();

    // this.sample$.pipe(
      // first()
      // take(2)
      // takeWhile(x=> x < 5)
      // takeWhile(x=> x < 5, true)
      // takeUntil(this.destroy$));

  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }


  submit() {
    this.isSubmitted= true;
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls.name?.errors?.required);
    console.log(this.registerForm.controls['email']?.errors?.required);
  }

}
