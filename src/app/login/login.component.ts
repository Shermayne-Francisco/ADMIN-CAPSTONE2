import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'Sorry, not a valid email' : '';
  }
}
  // loginForm: FormGroup;
  // message: any;
  // hide = true;
  // clicked = false;

  // constructor(private route: Router, private formBuilder:FormBuilder, private snackBar: MatSnackBar) { 
  //   this.loginForm = this.formBuilder.group({
  //     admin: new FormControl('', [Validators.required,Validators.maxLength(50)]),
  //     password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
  //   })
  // }

  // ngOnInit(): void {
  // }

  // login() {

  //   interface Staff{
  //     email_admin: number;
  //     password_admin: string;
  //   }


  //   const data: Staff = {
  //     email_admin: this.loginForm.value.admin,
  //     password_admin: this.loginForm.value.password
  //   }
  // }
// }