import { Component } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent {
  constructor(private router: Router, ){}
  
  logout(){
    this.router.navigate(['/login']);
  }

}

  

  

