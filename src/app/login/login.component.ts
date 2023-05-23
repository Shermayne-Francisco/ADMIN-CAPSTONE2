import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private session: SessionService,
    public post: PostService
    ){}

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter your email';
    }

    return this.email.hasError('email') ? 'Sorry, not a valid email' : '';
  }

  login() {
    let loginData = {
      email: this.email.value,
      password: this.password.value
    };
  
    this.post.postData('Admin_Login', JSON.stringify(loginData))
    .subscribe((response: any) => {
      this.session.uploadToSession(JSON.stringify(response.payload));
      this.router.navigate(['/home/dashboard']);
    })
  };
}