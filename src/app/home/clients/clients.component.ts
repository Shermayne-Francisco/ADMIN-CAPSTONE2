import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  // HEALTH HISTORY PAGINATION
  displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = ELEMENT_DATA;
  // displayedColumns2 = ['name', 'weight', 'date'];
  // dataSource2 = new MatTableDataSource<TypeElement>(ELEMENT_DATA);

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


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


/** ADD NEW CLIENT DIALOG */
@Component({
  selector: 'addclient-dialog',
  templateUrl: 'addclient-dialog.html',
})
export class AddclientDialog {}

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
  ];

  myDatePicker: any;
}

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
  ];
  
  // dataSource2: any;
  // displayedColumns2: any;
}


/** HEALTH HISTORY DIALOGS — VAXX, DEWORM, HWP */
//FOR VACCIANTION DIALOG
@Component({
  selector: 'vaccination-dialog',
  templateUrl: 'vaccination-dialog.html',
})
export class VaccinationDialog {
  dataSource2: any;
  displayedColumns2: any;
}