import { AbstractControl, FormGroup, Validators } from "@angular/forms";

export function comparePassword(control: AbstractControl){
    const v = control as FormGroup
    if(v.controls.confirmPassword.value === v.controls.createPassword.value)
    v.controls.confirmPassword.setErrors({match: 'matched'});
    else
    v.controls.confirmPassword.setErrors({match: 'not Matched'});


    var myRegEx  = /[^a-z\d]/i;
    var isValid = !(myRegEx.test(v.controls.confirmPassword.value));
    if (!isValid) {
      v.controls.confirmPassword.setErrors({match: 'true'});
    } else {
      v.controls.confirmPassword.setErrors({match: 'shoild be alphanumeric'});
    }

    return v;
  }