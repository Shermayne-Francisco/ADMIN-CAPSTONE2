import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent {
  constructor(private router: Router, public dialog: MatDialog){}

    logout(){
      this.router.navigate(['/login']);
    }

    addHealth() {
      const dialogRef = this.dialog.open(HealthinfoDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    setSched() {
      const dialogRef = this.dialog.open(SchedDialog)
        
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}

@Component({
  selector: 'healthinfo-dialog',
  templateUrl: 'healthinfo-dialog.html',
})
export class HealthinfoDialog {}

@Component({
  selector: 'sched-dialog',
  templateUrl: 'sched-dialog.html',
})
export class SchedDialog {}
