import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


//FOR ADD PET DIALOG
interface AddPet {
  name: string;
}

// FOR ADD SCHED AND HEALTH HISTORY DIALOG
interface Vaccine {
  vaxx: string;
}

//FOR CLIENT TABLE LIST
export interface UserData {
  name: string;
}

// CONSTANTS USED TO FILL UP THE DATABASE
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'] 
}) 
export class ClientsComponent {
  panelOpenState = false;
  disableSelect = new FormControl(false);

  //CLIENTS' LISTS PAGINATION
  displayedColumns: string[] = ['name'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(public dialog: MatDialog) {
    /** TABLE LIST PAGINATION */
    // CREATE 100 USERS
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // ASSIGN THE DATA TO THE DATA SOURCE FOR THE TABLE TO RENDER
    this.dataSource = new MatTableDataSource(users);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //FILTER FIELD
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** DIALOGS */
  addClient() {
    const dialogRef = this.dialog.open(AddclientDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addPet() {
    const dialogRef = this.dialog.open(AddpetDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addSched() { 
    const dialogRef = this.dialog.open(AddschedDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addHealth() {
    const dialogRef = this.dialog.open(AddhealthDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  vaxxDialog() {
    const dialogRef = this.dialog.open(VaccinationDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dewormDialog() {
    const dialogRef = this.dialog.open(DewormingDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  hwpDialog() {
    const dialogRef = this.dialog.open(HeartwormDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  otherDialog() {
    const dialogRef = this.dialog.open(TreatmentsDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  /** END -- DIALOGS */
  
}

// BUILDS AND RETURNS A NEW USER
function createNewUser(_id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    name: name,
  };
}


/** ADD NEW CLIENT DIALOG */
@Component({
  selector: 'addclient-dialog',
  templateUrl: 'addclient-dialog.html',
})
export class AddclientDialog {}
/** END -- ADD NEW CLIENT DIALOG */

/** ADD NEW CLIENT'S PET DIALOG */
@Component({
  selector: 'addpet-dialog',
  templateUrl: 'addpet-dialog.html',
})
export class AddpetDialog {
  typeControl = new FormControl<AddPet | null>(null, Validators.required);
  addpets: AddPet[] = [
    {name: 'Female'},
    {name: 'Male'},
  ];
}
/** END -- ADD NEW CLIENT'S PET DIALOG */

/** ADD SCHED DIALOG */
@Component({
  selector: 'addsched-dialog',
  templateUrl: 'addsched-dialog.html',
})
export class AddschedDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {vaxx: 'Vaccination'},
    {vaxx: 'Deworming'},
    {vaxx: 'Heartworm Prevention'},
    {vaxx: 'Other Treatment'},
  ];

  myDatePicker: any;
}
/** END -- ADD SCHED DIALOG */

/** PET HEALTH HISTORY DIALOG */
@Component({
  selector: 'addhealth-dialog',
  templateUrl: 'addhealth-dialog.html',
})
export class AddhealthDialog {
  typeControl = new FormControl<Vaccine | null>(null, Validators.required);
  vaccines: Vaccine[] = [
    {vaxx: 'Vaccination'},
    {vaxx: 'Deworming'},
    {vaxx: 'Heartworm Prevention'},
    {vaxx: 'Other Treatment'},
  ];
}
/** END -- PET HEALTH HISTORY DIALOG */


            /** HEALTH HISTORY DIALOGS — VAXX, DEWORM, HWP */
/** FOR VACCINATION DIALOG */
@Component({
  selector: 'vaccination-dialog',
  templateUrl: 'vaccination-dialog.html',
})
export class VaccinationDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR VACCINATION DIALOG */

/** FOR DEWORMING DIALOG */
@Component({
  selector: 'deworming-dialog',
  templateUrl: 'deworming-dialog.html',
})
export class DewormingDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR DEWORMING DIALOG */

/** FOR HEARTWORM DIALOG */
@Component({
  selector: 'heartworm-dialog',
  templateUrl: 'heartworm-dialog.html',
})
export class HeartwormDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
/** END -- FOR HEARTWORM DIALOG */

/** FOR TREATMENTS DIALOG */
@Component({
  selector: 'treatments-dialog',
  templateUrl: 'treatments-dialog.html',
})
export class TreatmentsDialog {
  displayedColumns: string[] = ['name', 'weight', 'date'];
  dataSource = new MatTableDataSource<History>(HISTORIES_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// Contents - History Pagination
export interface History {
  name: string;
  weight: string;
  date: string;
}

const HISTORIES_DATA: History[] = [
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
  { name: 'Nobivac', weight: '6.8', date: '04-30-2022'},
];
/** END -- FOR TREATMENTS DIALOG */