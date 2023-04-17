import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// FOR HEALTH INFO DIALOG
interface Vaccine {
  name: string;
}

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent {
  displayedColumns = ['name', 'weight', 'date'];
  dataSource = ELEMENT_DATA;

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



export interface TypeElement {
  name: string;
  weight: number;
  date: string;
}

const ELEMENT_DATA: TypeElement[] = [
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'NobivacNobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
  {name: 'Nobivac', weight: 6.8, date: '4/23/2023'},
];

// TYPE OF VACCINE OPTIONS DIALOG
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

  myDatePicker: any;
}
