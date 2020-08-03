import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor() { }
  signUpForm = new FormGroup({
    "emailId": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required, Validators.minLength(5)]),
    "confirmPassword": new FormControl('', [Validators.required]),
    "gender": new FormControl(''),
    "country": new FormControl('')
  })

  isSubmitted = false;

  ngOnInit(): void { }

  btnSubmitHandler() {
    this.isSubmitted = true;
    if(this.signUpForm.invalid) {
      console.log("invalid form")
    }
  }

  passwordCheckEqual(group: FormGroup): boolean {
    if (group.get("password").value !== group.get("confirmPassword").value) {
      return false; // they don't match
    }
    return true;  // they match

  }

}
