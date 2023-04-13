import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// FOR HEALTH INFO DIALOG
interface Vaccine {
  name: string;
}

// interface Appoint {
//   name: string;
// }

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

// TYPE OF VACCINE OPTIONS
@Component({
  selector: 'healthinfo-dialog',
  templateUrl: 'healthinfo-dialog.html',
})
export class HealthinfoDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {name: 'Vaccination'},
    {name: 'Deworming'},
    {name: 'Heartworm Prevention'},
  ];
}

// SCHED DIALOG
@Component({
  selector: 'sched-dialog',
  templateUrl: 'sched-dialog.html',
})
export class SchedDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {name: 'Vaccination'},
    {name: 'Deworming'},
    {name: 'Heartworm Prevention'},
  ];
}
