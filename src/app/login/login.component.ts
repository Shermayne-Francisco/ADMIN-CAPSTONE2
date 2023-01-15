// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

// }

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

  loginForm: FormGroup;
  message: any;
  hide = true;
  clicked = false;

  constructor(private route: Router, private formBuilder:FormBuilder, private snackBar: MatSnackBar) { 
    this.loginForm = this.formBuilder.group({
      faculty: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    })
  }

  ngOnInit(): void {
  }

  login() {

    interface Student{
      email_fclty: number;
      password_fclty: string;
    }


    const data: Student = {
      email_fclty: this.loginForm.value.faculty,
      password_fclty: this.loginForm.value.password
    }



    // this.data.apiRequest("/login", data)
    // .subscribe((res : any) => { 
    //   if(res.status.remarks == "success"){
    //     this.route.navigate(['/main/studlist'])
    //     this.snackBar.open("Login Successfully", "",{
    //       duration: 5000
    //     })
    //   }
    //   else{
    //     this.snackBar.open("Access Denied", "",{
    //       duration: 5000
    //     })
    //   }
    // }) 
}
}


