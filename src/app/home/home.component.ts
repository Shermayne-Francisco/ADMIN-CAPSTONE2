import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router
  ){}


    // clients(){
    //   this.router.navigate(['/home/clients'])
    // }
    // appointments(){
    //   this.router.navigate(['/home/appointments'])
    // }

    logout(){
      this.router.navigate(['/login']);
    }
    
}
