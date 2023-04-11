import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent {
  constructor(
    private router: Router
  ){}

    logout(){
      this.router.navigate(['/login']);
    }
}
