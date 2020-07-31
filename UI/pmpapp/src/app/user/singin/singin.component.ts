import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormControl, Validators } from '@angular/forms';
// import { MatFormField,MatLabel,MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  //some objects that used to build my form
  singinForm = new FormGroup({
    "emailId": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });


  isSubmited = false;
  constructor() { }

  ngOnInit(): void {
  }
  btnSubmitHandler()
  {
    this.isSubmited= true;
    if(this.singinForm.invalid)
    {
      console.log("not")
    }
  }

}
