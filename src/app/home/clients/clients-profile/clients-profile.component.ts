import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-profile',
  templateUrl: './clients-profile.component.html',
  styleUrls: ['./clients-profile.component.scss']
})
export class ClientsProfileComponent {
  constructor(
    private router: Router
  ){}
  
  logout(){
    this.router.navigate(['/login']);
  }
}
