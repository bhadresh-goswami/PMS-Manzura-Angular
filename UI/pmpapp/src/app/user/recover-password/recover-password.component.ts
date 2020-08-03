import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  constructor() { }
  recoverForm = new FormGroup({
    "emailId": new FormControl('', [Validators.required, Validators.email])
  })
  isSubmitted = false;

  ngOnInit(): void {
  }

  btnSubmitHandler() {
    this.isSubmitted = true;
  }

}
